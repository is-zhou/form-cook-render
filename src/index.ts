import type { App } from 'vue'
import FormCookRender from './lib/FormCookRender.vue'
import { getComponent, registerComponents } from './lib/core/registry'
import { defaultComponents } from './lib/core/defaultComponents'
import { getGlobalFn } from './lib/utils/globalFunctions'

//支持插件模式 允许 app.use() 使用
export default {
    install: (app: App, options?: { components?: Record<string, string | Component | (() => Promise<Component>)> }): void => {
        // 注册 FormCookRender 组件
        app.component('FormCookRender', FormCookRender)

        registerComponents({
            // 注册默认组件
            ...defaultComponents(),
            //注册传入的组件（重名会覆盖）
            ...options?.components || {}
        })
    }
}

// 支持按需导入
export { FormCookRender, registerComponents, defaultComponents, getComponent, getGlobalFn }

//类型导出
export type {
    FormSchema,
    BaseConfig,
    ComponentConfig,
    FormAreaConfig,
    ComponentName,
    ComponentNameMap,
    FormCompConfig,
    LayoutCompConfig,
    Attrs,
    OptionsConfig,
    Option,
    Slots,
    EventConfig,
    FormItem
} from './lib/types/schema.ts';

