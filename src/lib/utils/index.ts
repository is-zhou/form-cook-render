import { ComponentConfig } from "../types/schema";
import { cloneDeep, get, set } from "lodash-es";

export function setDefaultValues(formData: Record<string, unknown>, componentConfigList: ComponentConfig[]) {
    const _formData = Object.assign({}, cloneDeep(formData))
    componentConfigList.forEach((config) => {
        if (config.componentType === "form") {
            const field = config.formItemAttrs.field;
            if (typeof config.defaultValue !== "undefined" && get(_formData, field) === undefined) {
                set(_formData, field, config.defaultValue);
            }
        } else if (config.children?.length) {
            setDefaultValues(_formData, config.children);
        }
    })

    return cloneDeep(_formData)
}