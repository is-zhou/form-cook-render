import { Slot, Option, ComponentConfig, FormCompConfig, LayoutCompConfig, OptionsConfig, EventConfig } from "@/types/schema"
import { cloneDeep } from "lodash-es"
import { getComponent, getBuiltinFn } from "../registry"

const loadOptions = async (node: FormCompConfig, formData: Ref<Record<string, unknown>>) => {
    const result = await getOptions(node.attrs, { formData: formData.value, schemaItem: node })

    node.attrs._options = result.resolvedOptions

    return result.effect
}

const loadData = async (node: FormCompConfig, formData: Ref<Record<string, unknown>>) => {
    const result = await getDataList(node.attrs, { formData: formData.value, schemaItem: node })

    node.attrs._data = result.resolvedData

    return result.effect
}

const loadSlots = async (node: ComponentConfig, formData: Ref<Record<string, unknown>>) => {
    node._slots = await renderSlots(node, formData)
}


const loadEvents = (events: EventConfig[], formData: Record<string, unknown>) => {
    const props: Record<string, Function> = {}

    events.forEach(evt => {
        if (!evt.eventName) return

        const eventKey = 'on' + evt.eventName[0].toUpperCase() + evt.eventName.slice(1)

        if (evt.handlerType === 'fn' && evt.fn) {
            const fn = evt.fn
            props[eventKey] = () => fn(formData)

        } else if (evt.handlerType === 'builtinFn' && evt.fnName) {
            const fn = getBuiltinFn(evt.fnName)
            if (fn) props[eventKey] = fn

        }
    })

    return props
}

export { loadOptions, loadData, loadSlots, loadEvents }



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

async function renderSlots(node: ComponentConfig, formData: Ref<Record<string, unknown>>) {
    if (!node.slots || typeof node.slots !== "object") return;

    const slots: Record<string, () => VNode[] | string> = {};

    for (const key in node.slots) {
        const current: Slot | string = node.slots[key];

        if (typeof current === "string") {
            slots[key] = () => current;

        } else {

            if (typeof node.slots[key] !== "object") return;



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
    }

    return slots;
}