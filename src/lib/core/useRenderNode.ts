import { get, set } from "lodash-es";
import { ComponentConfig, FormCompConfig, LayoutCompConfig } from "../types/schema";
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

        let slots = getSlots(node);

        setDefaultValue(formData, node)

        return h(
            ElFormItem,
            { prop: node.formItemAttrs.field, ...node.formItemAttrs },
            {
                default: () =>
                    h(
                        comp,
                        {
                            ...node.attrs,
                            modelValue: get(formData.value, node.formItemAttrs.field),
                            "onUpdate:modelValue": (v: unknown) =>
                                set(formData.value, node.formItemAttrs.field, v),
                        },
                        slots
                    ),
            }
        );
    };




    return { renderNode }
}



function getSlots(node: ComponentConfig) {
    let slots: { [key: string]: () => Array<VNode> } | undefined = undefined;
    if (Array.isArray(node.slots) && node.slots.length > 0) {
        // {
        //   slotName: () => [
        //     h("option", { value: "shanghai" }, "Zone one"),
        //     h("option", { value: "beijing" }, "Zone two"),
        //   ];
        // }
        slots = {};

        node.slots.forEach((slot) => {
            const slotComp = getComponent(slot.componentName);
            if (!slotComp) {
                return;
            }

            if (slot.options) {
                const list = slot.options?.map((opt) => {
                    const { value, name, label } = opt;
                    return h(slotComp, { value, name, label }, { default: () => label });
                });

                slots![slot.name] = () => list;
            } else {
                slots![slot.name] = () => [h(slot.componentName)];
            }
        });
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