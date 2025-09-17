import { get, set } from "lodash-es";
import { Attrs, Slot, Option, ComponentConfig, FormCompConfig, LayoutCompConfig, OptionsConfig } from "../types/schema";
import { getComponent } from "./registry";
import type { Ref } from "vue";

export function useRenderNode(formData: Ref<Record<string, unknown>>) {

    const renderLayout = (comp: string | Component, node: LayoutCompConfig) => {
        return h(comp, node.attrs, {
            default: () => node.children?.map(renderNode),
        });
    }

    const renderDefaultChildren = (comp: string | Component, node: FormCompConfig) => {
        const loading = ref(false);
        const loadingSlots = ref(false);

        const options = node.attrs.options

        if (!Array.isArray(options) && options) {
            loading.value = true

            new Promise(async (res, rej) => {
                node.attrs.options = await getOptions(node.attrs)
                loading.value = false
                res(1)
            })
        }

        const props: Record<string, any> = {
            modelValue: get(formData.value, node.formItemAttrs.field),
            "onUpdate:modelValue": (v: unknown) =>
                set(formData.value, node.formItemAttrs.field, v),
            ...node.attrs
        }

        if (node.slots && !node._slots) {
            loadingSlots.value = true
            new Promise(async (res, rej) => {
                node._slots = await renderSlots(node)
                loadingSlots.value = false
                res(1)
            })
        }

        return (loading.value || loadingSlots.value) ? h(ElSkeleton, { rows: 0, animated: true }) : h(comp, props, node._slots);
    }

    const renderSlots = async (node: ComponentConfig) => {

        let slots: { [key: string]: () => Array<VNode> } | undefined = undefined;

        if (node.slots && typeof node.slots === "object") {

            slots = {};

            const promiseList = Object.keys(node.slots).map(key => {

                const current: Slot = node.slots![key]
                const slotComp = getComponent(current.componentName);

                return new Promise(async (res) => {
                    if (!slotComp) {
                        res(true)
                        return
                    }
                    if (!current.options) {
                        slots![key] = () => [h(slotComp)];
                        res(true)
                        return
                    }

                    if (Array.isArray(current.options)) {

                        const list = current.options?.map((opt) => {
                            const { value, name, label } = opt as any;
                            return h(slotComp, { value, name, label }, { default: () => label });
                        });

                        slots![key] = () => list;
                        res(true)
                        return
                    }

                    node.slots![key].options = await getOptions(current)

                    const list = node.slots![key].options?.map((opt) => {
                        if (typeof opt === "object") {
                            return h(slotComp, opt, opt.label ? { default: () => opt.label } : undefined);
                        } else {
                            return h(slotComp);
                        }
                    }) || []

                    slots![key] = () => list;
                    res(true)
                })
            })

            await Promise.all(promiseList)
        }

        return slots
    }

    const renderNode = (node: ComponentConfig): VNode | undefined => {
        const comp = getComponent(node.componentName);

        if (!comp) {
            return;
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

async function getOptions(attrs: { options?: OptionsConfig }) {
    let resolvedOptions: Option[] = []

    if (Array.isArray(attrs.options) || !attrs.options) {
        return attrs.options
    }

    async function handleResolveOptions(options?: OptionsConfig) {
        if (typeof options === 'function') {
            const result = await options()
            resolvedOptions = result
        } else if (typeof options === 'object' && !Array.isArray(options) && options.url) {
            const res = await fetch(options.url, { method: options.method || 'GET' })
            const data = await res.json()
            resolvedOptions = options.map ? options.map(data) : data
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