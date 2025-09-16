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

    const renderNode = (node: ComponentConfig): VNode | undefined => {
        const comp = getComponent(node.componentName);

        if (!comp) {
            return;
        }

        if (node.componentType === "layout") {
            return renderLayout(comp, node)
        }

        setDefaultValue(formData, node)

        setOptions(node.attrs)

        const slots = getSlots(node);


        const props: Record<string, any> = {
            modelValue: get(formData.value, node.formItemAttrs.field),
            "onUpdate:modelValue": (v: unknown) =>
                set(formData.value, node.formItemAttrs.field, v),
            ...node.attrs
        }

        return h(
            ElFormItem,
            { prop: node.formItemAttrs.field, ...node.formItemAttrs },
            {
                default: () =>
                    h(
                        comp,
                        props,
                        slots
                    ),
            }
        );
    };

    return { renderNode }
}

function setOptions(attrs: { options?: OptionsConfig }) {
    const resolvedOptions = ref<Option[]>([])

    if (Array.isArray(attrs.options) || !attrs.options) {
        return
    }

    async function handleResolveOptions(options?: OptionsConfig) {
        if (typeof options === 'function') {
            const result = await options()
            resolvedOptions.value = result
        } else if (typeof options === 'object' && !Array.isArray(options) && options.url) {
            const res = await fetch(options.url, { method: options.method || 'GET' })
            const data = await res.json()
            resolvedOptions.value = options.map ? options.map(data) : data
        }

    }
    handleResolveOptions(attrs.options)

    attrs.options = resolvedOptions as unknown as OptionsConfig
}

function getSlots(node: ComponentConfig) {
    let slots: { [key: string]: () => Array<VNode> } | undefined = undefined;

    if (node.slots && typeof node.slots === "object") {
        slots = {};

        Object.keys(node.slots).forEach(key => {
            const current: Slot = node.slots![key]

            const slotComp = getComponent(current.componentName);

            if (!slotComp) {
                return
            }

            if (!current.options) {
                slots![key] = () => [h(slotComp)];
                return
            }

            if (Array.isArray(current.options)) {

                const list = current.options?.map((opt) => {
                    const { value, name, label } = opt as any;
                    return h(slotComp, { value, name, label }, { default: () => label });
                });

                slots![key] = () => list;
                return
            }

            setOptions(current)

            if (isRef(current.options) && current.options.value && Array.isArray(current.options.value)) {
                const list = current.options.value.map((opt) => {
                    const { value, name, label } = opt as any;
                    return h(slotComp, { value, name, label }, { default: () => label });
                });

                slots![key] = () => list;
            }
        })
    }
    return slots
}

function setDefaultValue(formData: Ref<Record<string, unknown>>, node: FormCompConfig) {
    if (node.defaultValue !== "") {
        const currentVal = get(formData.value, node.formItemAttrs.field);
        if (currentVal === undefined) {
            set(formData.value, node.formItemAttrs.field, node.defaultValue);
        }
    }
}