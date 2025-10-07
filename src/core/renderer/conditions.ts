import { ComponentConfig, FormCompConfig } from "@/types/schema";
import { get, set } from "lodash-es";

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

export function getDisabled(config: FormCompConfig, formData: Record<string, unknown>) {
    let isDisabled = false;
    if (typeof config.attrs.disabled === "boolean") {
        isDisabled = config.attrs.disabled;
    }
    if (typeof config.attrs.disabled === "function") {
        isDisabled = !!config.attrs.disabled({
            formData: formData,
            schemaItem: config,
        });
    }
    return isDisabled;
}

export function getReadonly(config: FormCompConfig, formData: Record<string, unknown>) {
    let isReadonly = false;
    if (typeof config.attrs.readonly === "boolean") {
        isReadonly = config.attrs.readonly;
    }
    if (typeof config.attrs.readonly === "function") {
        isReadonly = !!config.attrs.readonly({
            formData: formData,
            schemaItem: config,
        });
    }
    return isReadonly;
}