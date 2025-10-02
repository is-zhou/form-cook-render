import { cloneDeep, debounce, get, set } from "lodash-es";
import { Slot, Option, ComponentConfig, FormCompConfig, LayoutCompConfig, OptionsConfig, EventConfig } from "../types/schema";
import { getComponent } from "./registry";
import type { Ref } from "vue";
import reloadMap from "../utils/reloadMap";
import { getGlobalFn } from "../utils/globalFunctions";

export function useRenderNode(formData: Ref<Record<string, unknown>>) {

    const loadOptions = async (node: FormCompConfig) => {
        const result = await getOptions(node.attrs, { formData: formData.value, schemaItem: node })

        node.attrs._options = result.resolvedOptions

        return result.effect
    }

    const loadData = async (node: FormCompConfig) => {
        const result = await getDataList(node.attrs, { formData: formData.value, schemaItem: node })

        node.attrs._data = result.resolvedData

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

        const props = {
            ...node.attrs,
            style: node.style
        }
        const loadingSlots = ref(false);

        if (node.slots && !node._slots) {
            loadingSlots.value = true
            loadSlots(node).finally(() => loadingSlots.value = false)
        }
        return !loadingSlots.value && !node._slots ? h(comp, props) : h(comp, props, node._slots);
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

            if (current.text) {
                slots[key] = () => [h(slotComp, current.attrs, { default: () => current.text })];
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

        // ---- data 异步处理 ----
        if (node.attrs.data && !node.attrs._data) {
            loading.value = true
            loadData(node).then((effect) => {
                reloadMap.addReloadMap(node.id, [() => loadData(node), effect])
            }).finally(() => loading.value = false)
        }

        // ---- slots 异步处理 ----
        if (node.slots && !node._slots) {
            loadingSlots.value = true
            loadSlots(node).finally(() => loadingSlots.value = false)
        }

        const { options, _options, data, _data, ...value } = node.attrs

        const { events } = node
        let eventProps = {}
        if (events) {
            eventProps = buildEventProps(events, formData.value)
        }

        const props: Record<string, any> = {
            modelValue: get(formData.value, node.formItemAttrs.field),
            "onUpdate:modelValue": (v: unknown) =>
                set(formData.value, node.formItemAttrs.field, v),
            ...value,
            ...eventProps
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

        if (_data) {
            props.data = _data
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

async function getDataList(
    attrs: { data?: OptionsConfig },
    params: { formData: Record<string, any>; schemaItem: ComponentConfig }) {

    const data = attrs.data

    const resolved: { resolvedData: Option[], effect: string[] } = { resolvedData: [], effect: [] }


    if (Array.isArray(data) || !data) {
        resolved.resolvedData = cloneDeep(data) as Option[]

    }

    if (typeof data === 'function') {
        const result = await data(params)!
        resolved.resolvedData = result[0]
        resolved.effect = result[1]
    } else if (typeof data === 'object' && !Array.isArray(data) && data.url) {
        const res = await fetch(data.url, { method: data.method || 'GET' })
        const dataJson = await res.json()
        const result = await data.map(dataJson, params)
        resolved.resolvedData = result[0]
        resolved.effect = result[1]
    }
    return resolved
}

function buildEventProps(events: EventConfig[], formData: Record<string, unknown>) {
    const props: Record<string, Function> = {}

    events.forEach(evt => {
        if (!evt.eventName) return

        const eventKey = 'on' + evt.eventName[0].toUpperCase() + evt.eventName.slice(1)

        if (evt.handlerType === 'fn' && evt.fn) {
            const fn = evt.fn
            props[eventKey] = () => fn(formData)

        } else if (evt.handlerType === 'globalFn' && evt.fnName) {
            const fn = getGlobalFn(evt.fnName)
            if (fn) props[eventKey] = fn

        }
    })

    return props
}


