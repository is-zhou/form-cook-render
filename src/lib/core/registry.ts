import { defineAsyncComponent, type Component } from 'vue'
import { isUpperCaseFirst } from '../utils';

type RegistryItem =
    | { type: 'sync'; component: string | Component }
    | { type: 'async'; loader: () => Promise<Component> }

let registry: Record<string, RegistryItem> = {}

/**
 * 用户注册组件
 * @param components key => string | Component | () => import()
 */
export function registerComponents(components: Record<string, string | Component | (() => Promise<Component>)>) {
    for (const key in components) {
        const comp = components[key]
        // 支持同步组件和异步组件
        if (typeof comp === 'function' && comp.prototype === undefined) {
            registry[key] = { type: "async", loader: comp as (() => Promise<Component>) }
        } else {
            registry[key] = { type: "sync", component: comp }
        }
    }
}

/**
 * 通过注册名称获取组件（同步或者异步）
 */
export function getComponent(name: string) {
    if (!name) {
        console.error(`[FormCookRender] 请传入组件名称或者原生Html元素，组件请以大写字母开头，原生Html元素小写字母开头`)
        return null
    }
    const target = registry[name]
    if (!target && isUpperCaseFirst(name)) {
        console.warn(`[FormCookRender] 组件 "${name}" 未注册`)
        return null
    }

    if (!target && !isUpperCaseFirst(name)) {
        return name
    }

    if (target.type === "sync") {
        return target.component
    }
    return defineAsyncComponent(target.loader)
}
