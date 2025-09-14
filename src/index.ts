import type { App } from 'vue'
import FormRender from './lib/FormRender.vue'
import { getComponent, registerComponents } from './lib/core/registry'
import { defaultComponents } from './lib/core/defaultComponents'

//支持插件模式 允许 app.use() 使用
export default {
    install: (app: App, options?: { components?: Record<string, Component | (() => Promise<Component>)> }): void => {
        // 注册 FormRender 组件
        app.component('FormRender', FormRender)

        registerComponents({
            // 注册默认组件
            ...defaultComponents(),
            //注册传入的组件（重名会覆盖）
            ...options?.components || {}
        })
    }
}

// 支持按需导入
export { FormRender, registerComponents, defaultComponents, getComponent }

//类型导出
export type { FormSchema, ComponentConfig, FormAreaConfig, ComponentName, FormCompConfig, LayoutCompConfig } from './lib/types/schema.ts';

