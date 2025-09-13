import type { App } from 'vue'
import FormRender from './components/FormRender.vue'

// 插件安装方法
const install = (app: App): void => {
    app.component('FormRender', FormRender)
}

// 允许 app.use() 使用
export default {
    install
}
// 支持按需导入
export { FormRender }
