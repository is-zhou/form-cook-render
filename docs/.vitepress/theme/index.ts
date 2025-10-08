import DefaultTheme from "vitepress/theme"
import FormCookRender from '../../../src/index'

import ElementPlus from 'element-plus'; // 引入组件库
import 'element-plus/dist/index.css'; // 引入样式
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(ElementPlus); // 注册组件库
        app.use(FormCookRender); // 注册组件库
    },
}
