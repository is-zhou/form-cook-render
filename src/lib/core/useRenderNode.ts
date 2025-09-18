import { cloneDeep, debounce, get, set } from "lodash-es";
import { Slot, Option, ComponentConfig, FormCompConfig, LayoutCompConfig, OptionsConfig } from "../types/schema";
import { getComponent } from "./registry";
import type { Ref } from "vue";
import reloadMap from "../utils/reloadMap";
export function useRenderNode(formData: Ref<Record<string, unknown>>) {

    const loadOptions = async (node: FormCompConfig) => {
        const result = await getOptions(node.attrs, { formData: formData.value, schemaItem: node })

        node.attrs._options = result.resolvedOptions

        return result.effect
    }

    const loadSlots = async (node: ComponentConfig) => {
        node._slots = await renderSlots(node)
    }

    const renderLayout = (node: LayoutCompConfig) => {
        const comp = getComponent(node.componentName);

        if (!comp) {
            return;
        }

        return h(comp, node.attrs);
    }

    const renderSlots = async (node: ComponentConfig) => {
        if (!node.slots || typeof node.slots !== "object") return;

        const slots: Record<string, () => VNode[]> = {};

        for (const key in node.slots) {
            const current: Slot = node.slots[key];
            const slotComp = getComponent(current.componentName);
            if (!slotComp) continue;

            let opts = current.options;

            // 异步 options
            if (typeof opts === "function" || (opts && typeof opts === "object" && "url" in opts)) {
                const result = await getOptions(current, { formData: formData.value, schemaItem: node });
                node.slots[key].options = result.resolvedOptions;
                opts = result.resolvedOptions;
            }

            if (Array.isArray(opts)) {
                slots[key] = () =>
                    opts.map(opt =>
                        typeof opt === "object"
                            ? h(slotComp, opt, opt.label ? { default: () => opt.label } : undefined)
                            : h(slotComp)
                    );
            } else {
                slots[key] = () => [h(slotComp)];
            }
        }

        return slots;
    }

    const renderForm = (node: FormCompConfig): VNode | undefined => {
        const comp = getComponent(node.componentName);

        if (!comp) {
            return;
        }

        const loading = ref(false);
        const loadingSlots = ref(false);

        // ---- options 异步处理 ----
        if (node.attrs.options && !node.attrs._options) {
            loading.value = true
            loadOptions(node).then((effect) => {
                reloadMap.addReloadMap(node.id, [() => loadOptions(node), effect])
            }).finally(() => loading.value = false)
        }

        // ---- slots 异步处理 ----
        if (node.slots && !node._slots) {
            loadingSlots.value = true
            loadSlots(node).finally(() => loadingSlots.value = false)
        }

        const { options, _options, ...value } = node.attrs

        const props: Record<string, any> = {
            modelValue: get(formData.value, node.formItemAttrs.field),
            "onUpdate:modelValue": (v: unknown) =>
                set(formData.value, node.formItemAttrs.field, v),
            ...value
        }

        if (typeof node.attrs.disabled === "function") {
            const isVisible = node.attrs.disabled({ formData: formData.value, schemaItem: node });
            node.attrs.disabled = !!isVisible
        }

        if (typeof node.attrs.readonly === "function") {
            const isVisible = node.attrs.readonly({ formData: formData.value, schemaItem: node });
            node.attrs.readonly = !!isVisible
        }

        if (_options) {
            props.options = _options
        }


        return (loading.value || loadingSlots.value)
            ? h(ElSkeleton, { rows: 0, animated: true })
            : h(comp, props, node._slots);
    };

    return { renderForm, renderLayout }
}

async function getOptions(
    attrs: { options?: OptionsConfig },
    params: { formData: Record<string, any>; schemaItem: ComponentConfig }) {

    const options = attrs.options

    const resolved: { resolvedOptions: Option[], effect: string[] } = { resolvedOptions: [], effect: [] }


    if (Array.isArray(options) || !options) {
        resolved.resolvedOptions = cloneDeep(options) as Option[]

    }

    if (typeof options === 'function') {
        const result = await options(params)!
        resolved.resolvedOptions = result[0]
        resolved.effect = result[1]
    } else if (typeof options === 'object' && !Array.isArray(options) && options.url) {
        const res = await fetch(options.url, { method: options.method || 'GET' })
        const data = await res.json()
        const result = await options.map(data, params)
        resolved.resolvedOptions = result[0]
        resolved.effect = result[1]
    }


    return resolved
}


