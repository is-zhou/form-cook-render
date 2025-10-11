import { ComponentConfig } from "@/types/schema";

export function isUpperCaseFirst(str: string) {
    return str[0] === str[0]?.toUpperCase()
}

export function replaceIndexInSchema(
    node: ComponentConfig | string,
    arrayKeyPath: string,
    index: number
): ComponentConfig | string {
    if (typeof node === "string") {
        return node;
    }
    if (node.componentType === "form" && node.formItemAttrs?.field) {
        node.formItemAttrs.field = `${arrayKeyPath}[${String(index)}].${node.formItemAttrs.field
            }`;
    }
    // layout 或 container 类型可能继续嵌套
    if (node.componentType === "layout" && node.children?.length) {
        node.children = node.children.map((child) =>
            replaceIndexInSchema(child, arrayKeyPath, index)
        );
    }
    return node;
};

export function collectDefaultValues(children: Array<ComponentConfig | string> = []) {
    const result: Record<string, unknown> = {};
    for (const child of children) {
        if (typeof child === "string") continue;

        if (child.componentType === "form" && child.formItemAttrs?.field) {
            result[child.formItemAttrs.field] = child.defaultValue ?? null;
        }

        // layout 或 container 类型可能继续嵌套
        if (child.componentType === "layout" && child.children?.length) {
            Object.assign(result, collectDefaultValues(child.children));
        }
    }
    return result;
};


export function normalizeStyle(
    userStyle: Record<string, string | number> | string | undefined,
    defaultStyle: Record<string, string | number> = {}
): Record<string, string | number> {
    const parseStyleString = (styleStr: string) => {
        const result: Record<string, string> = {};
        styleStr
            .split(";")
            .map((s) => s.trim())
            .filter(Boolean)
            .forEach((rule) => {
                const [key, value] = rule.split(":").map((s) => s.trim());
                if (key && value) result[key] = value.replace(/^["']|["']$/g, ""); // 去掉引号
            });
        return result;
    };

    let userStyleObj: Record<string, string | number> = {};
    if (typeof userStyle === "string") {
        userStyleObj = parseStyleString(userStyle);
    } else if (typeof userStyle === "object" && userStyle !== null) {
        userStyleObj = { ...userStyle };
    }

    return { ...defaultStyle, ...userStyleObj };
}