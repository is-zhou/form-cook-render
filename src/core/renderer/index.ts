import { ComponentConfig, EventConfig, FormCompConfig, LayoutCompConfig } from "@/types/schema";
import { getComponent } from "../registry";
import type { Ref } from "vue";
import { loadData, loadEvents, loadOptions, loadSlots } from "./load";
import { get, set } from "lodash-es";
import { addReload } from "../reload";

const renderLayoutNode = (node: LayoutCompConfig, formData: Ref<Record<string, unknown>>) => {
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
        loadSlots(node, formData).finally(() => loadingSlots.value = false)
    }
    return !loadingSlots.value && !node._slots ? h(comp, props) : h(comp, props, node._slots);
}

const renderFormNode = (node: FormCompConfig, formData: Ref<Record<string, unknown>>): VNode | undefined => {
    const comp = getComponent(node.componentName);

    if (!comp) {
        return;
    }

    const loading = ref(false);
    const loadingSlots = ref(false);

    // ---- options 异步处理 ----
    if (node.attrs.options && !node.attrs._options) {
        loading.value = true
        loadOptions(node, formData).then((effect) => {
            addReload(node.id, () => loadOptions(node, formData), effect)
        }).finally(() => loading.value = false)
    }

    // ---- data 异步处理 ----
    if (node.attrs.data && !node.attrs._data) {
        loading.value = true
        loadData(node, formData).then((effect) => {
            addReload(node.id, () => loadData(node, formData), effect)
        }).finally(() => loading.value = false)
    }

    // ---- slots 异步处理 ----
    if (node.slots && !node._slots) {
        loadingSlots.value = true
        loadSlots(node, formData).finally(() => loadingSlots.value = false)
    }

    const { options, _options, data, _data, disabled, readonly, ...value } = node.attrs

    const { events } = node
    let eventProps = {}
    if (events) {
        eventProps = loadEvents(events, formData.value)
    }
    const props: Record<string, any> = {
        ...value,
        ...eventProps
    }
    if (node.componentName === 'Upload') {
        Object.assign(props, {
            "file-list": get(formData.value, node.formItemAttrs.field),
            "onUpdate:file-list": (v: unknown) =>
                set(formData.value, node.formItemAttrs.field, v),
        })
    } else {
        Object.assign(props, {
            modelValue: get(formData.value, node.formItemAttrs.field),
            "onUpdate:modelValue": (v: unknown) =>
                set(formData.value, node.formItemAttrs.field, v),
        })
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

export function createVNodeRenderer(formData: Ref<Record<string, unknown>>) {
    const renderNode = (node: ComponentConfig) => {
        if (node.componentType === 'form') {
            return renderFormNode(node, formData)
        }
        if (node.componentType === 'layout') {
            return renderLayoutNode(node, formData)
        }
        return null
    }

    return { renderNode }
}