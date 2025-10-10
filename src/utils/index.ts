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

export function normalizeStyle(style: string | Record<string, string> | undefined) {
    if (!style) return undefined;

    if (typeof style === "string") {
        // Vue 内部也能解析字符串样式，但我们可以预处理一下防止空格或分号问题
        return style
            .split(";")
            .filter(Boolean)
            .reduce((obj, item) => {
                const [key, value] = item.split(":");
                if (key && value) obj[key.trim()] = value.trim();
                return obj;
            }, {} as Record<string, string>);
    }

    // 对象直接返回
    return style;
}