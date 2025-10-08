import DefaultTheme from "vitepress/theme"
import FormCookRender from '../../../src/index'

import 'element-plus/dist/index.css';// 引入样式
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(FormCookRender); // 注册组件库
    },
}
