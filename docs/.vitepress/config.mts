import { defineConfig } from 'vitepress'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';
import path from 'path';
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

const isProd = process.env.NODE_ENV === 'production'
const repoBase = isProd ? '/form-cook-render/' : '/'

const resolvedSrcPath = path.resolve(__dirname, '../../src');
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "form-cook-render",
  description: "一个基于 Vue3 + Element Plus 的表单渲染器",
  base: repoBase,
  head: [
    ['link', { rel: 'icon', href: `${repoBase}favicon.ico` }],
  ],
  themeConfig: {
    logo: '/logo_big.png',
    siteTitle: 'form-cook-render',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/guide/start/what-is' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/guide/start/what-is' },
          { text: '快速上手', link: '/guide/start/getting-started' },
        ]
      },
      {
        text: '基础',
        items: [
          { text: '创建一个表单', link: '/guide/basics/create-form' },
          { text: '渲染组件', link: '/guide/basics/comp-api' },
          { text: '渲染协议结构', link: '/guide/basics/comp-schema' },
          { text: '表单域配置', link: '/guide/basics/form-area' },
          { text: '内置组件', link: '/guide/basics/default-comp' },
        ]
      },
      {
        text: '内置组件',
        items: [
          { text: '输入框', link: '/guide/form/input' },
          { text: '数字输入框', link: '/guide/form/inputNumber' },
          { text: '标签输入框', link: '/guide/form/inputTag' },
          { text: '文本域', link: '/guide/form/textarea' },
          { text: '单选框组', link: '/guide/form/radioGroup' },
          { text: '评分', link: '/guide/form/rate' },
          { text: '选择器', link: '/guide/form/select' },
          { text: '滑块', link: '/guide/form/slider' },
          { text: '容器盒子', link: '/guide/layout/div' },
          { text: '分栏', link: '/guide/layout/row' },
        ]
      },
      {
        text: '进阶',
        items: [
          { text: '联动配置', link: '/guide/advanced/dynamic' },
          { text: '选项配置', link: '/guide/advanced/dynamic-options' },
          { text: '事件与全局函数', link: '/guide/advanced/events' },
          { text: '自定义组件', link: '/guide/advanced/custom' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/is-zhou/form-cook-render' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present zhouzhou'
    }
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin, {
        // 这里配置 demos 文件夹路径
        demoDir: path.resolve(__dirname, '../demos'),
      });
    },
  },
  vite: {
    plugins: [
      AutoImport({
        imports: ["vue"],
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(__dirname, "../../auto-imports.d.ts"),
      }),

      Components({
        resolvers: [ElementPlusResolver()],
        dts: path.resolve(__dirname, "../../components.d.ts"),
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
      },
    },
    ssr: {
      noExternal: ['element-plus', 'vitepress-demo-plugin'],
    },
  },
})
