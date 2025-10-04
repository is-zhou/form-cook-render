import { ComponentConfig } from "../types/schema";
import { cloneDeep, get, set } from "lodash-es";

export function setDefaultValues(formData: Record<string, unknown>, componentConfigList: ComponentConfig[]) {
    const _formData = Object.assign({}, cloneDeep(formData))
    componentConfigList.forEach((config) => {
        const isVisible = getVisible(config, formData)
        if (config.componentType === "form") {
            const field = config.formItemAttrs.field;
            if (typeof config.defaultValue !== "undefined" && get(_formData, field) === undefined && isVisible) {
                set(_formData, field, config.defaultValue);
            }
            if (!config.attrs.placeholder) {
                const text: { [key: string]: string } = {
                    select: "选择",
                }
                config.attrs.placeholder = `请${text[config.componentName] || '输入'}${config.formItemAttrs.label}`
            }

        } else if (config.children?.length) {
            setDefaultValues(_formData, config.children);
        }
    })

    return cloneDeep(_formData)
}

export function getVisible(config: ComponentConfig, formData: Record<string, unknown>) {
    let isVisible = true;
    if (typeof config.visible === "boolean" && !config.visible) {
        isVisible = false;
    }
    if (typeof config.visible === "function") {
        isVisible = !!config.visible({
            formData: formData,
            schemaItem: config,
        });
    }

    if (
        !isVisible &&
        config.componentType === "form" &&
        get(formData, config.formItemAttrs.field) !== undefined
    ) {
        set(formData, config.formItemAttrs.field, undefined);
    }

    return isVisible;
}