import type { App, Component } from 'vue'
import FormCookRender from '@/renderer/FormCookRender.vue'
import { registerComponents, registerDefaultComps } from '@/core/registry'

//支持插件模式 允许 app.use() 使用
export default {
    install: (app: App, options?: { components?: Record<string, string | Component | (() => Promise<Component>)> }): void => {
        // 注册 FormCookRender 组件
        app.component('FormCookRender', FormCookRender)
        // 注册默认组件
        registerDefaultComps()
        registerComponents({
            //注册传入的组件（重名会覆盖）
            ...options?.components || {}
        })
    }
}



