import { cloneDeep, get, set } from "lodash-es";
import { Attrs, Slot, Option, ComponentConfig, FormCompConfig, LayoutCompConfig, OptionsConfig } from "../types/schema";
import { getComponent } from "./registry";
import type { Ref } from "vue";
const reloadMap = new Map<string, () => Promise<void>>()
export function useRenderNode(formData: Ref<Record<string, unknown>>) {

    const loadOptions = async (node: FormCompConfig) => {

        node.attrs._options = await getOptions(node.attrs, { formData: formData.value, schemaItem: node })
    }

    const loadSlots = async (node: ComponentConfig) => {
        node._slots = await renderSlots(node)
    }

    const renderLayout = (comp: string | Component, node: LayoutCompConfig) => {
        return h(comp, node.attrs, {
            default: () => node.children?.map(renderNode),
        });
    }

    watch(() => formData.value, () => {
        console.log(reloadMap.values());
        Promise.all([...reloadMap.values()].map(fn => fn()))
    }, { deep: true, immediate: true })

    const renderDefaultChildren = (comp: string | Component, node: FormCompConfig) => {
        const loading = ref(false);
        const loadingSlots = ref(false);

        // ---- options 异步处理 ----
        if (node.attrs.options && !node.attrs._options) {
            loading.value = true
            loadOptions(node).finally(() => loading.value = false)
            reloadMap.set(node.id, () => loadOptions(node))
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


        if (typeof node.disabled === "boolean" && node.disabled) {
            props.disabled = node.disabled
        }
        if (typeof node.disabled === "function") {
            const isVisible = node.disabled({ formData: formData.value, schemaItem: node });
            props.disabled = isVisible
        }

        if (typeof node.readonly === "boolean" && node.readonly) {
            props.readonly = node.readonly
        }
        if (typeof node.readonly === "function") {
            const isVisible = node.readonly({ formData: formData.value, schemaItem: node });
            props.readonly = isVisible
        }

        if (_options) {
            props.options = _options
        }



        return (loading.value || loadingSlots.value)
            ? h(ElSkeleton, { rows: 0, animated: true })
            : h(comp, props, node._slots);
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
                opts = await getOptions(current, { formData: formData.value, schemaItem: node });
                node.slots[key].options = opts;
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

    const renderNode = (node: ComponentConfig): VNode | undefined => {
        const comp = getComponent(node.componentName);

        if (!comp) {
            return;
        }

        if (typeof node.visible === "boolean" && !node.visible) {
            return;
        }
        if (typeof node.visible === "function") {
            const isVisible = node.visible({ formData: formData.value, schemaItem: node });
            if (!isVisible) return;
        }

        if (node.componentType === "layout") {
            return renderLayout(comp, node)
        }


        setDefaultValue(formData, node)

        return h(
            ElFormItem,
            { prop: node.formItemAttrs.field, ...node.formItemAttrs },
            {
                default: () => renderDefaultChildren(comp, node)
            }
        );
    };

    return { renderNode }
}

async function getOptions(
    attrs: { options?: OptionsConfig },
    params: { formData: Record<string, any>; schemaItem: ComponentConfig }) {

    let resolvedOptions: Option[] = []

    if (Array.isArray(attrs.options) || !attrs.options) {
        return cloneDeep(attrs.options)
    }

    async function handleResolveOptions(options?: OptionsConfig) {
        if (typeof options === 'function') {
            const result = await options(params)!
            resolvedOptions = result
        } else if (typeof options === 'object' && !Array.isArray(options) && options.url) {
            const res = await fetch(options.url, { method: options.method || 'GET' })
            const data = await res.json()
            resolvedOptions = options.map ? options.map(data, params) : data
        }
    }
    await handleResolveOptions(attrs.options)

    return resolvedOptions
}

function setDefaultValue(formData: Ref<Record<string, unknown>>, node: FormCompConfig) {
    if (node.defaultValue !== "") {
        const currentVal = get(formData.value, node.formItemAttrs.field);
        if (currentVal === undefined) {
            set(formData.value, node.formItemAttrs.field, node.defaultValue);
        }
    }
}
