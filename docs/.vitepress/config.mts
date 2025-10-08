import { defineConfig } from 'vitepress'
const isProd = process.env.NODE_ENV === 'production'
const repoBase = isProd ? '/form-cook-render/' : '/'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "form-cook-render",
  description: "一个基于 Vue3 + Element Plus 的表单渲染器",
  base: repoBase,
  head: [
    // ico 格式
    ['link', { rel: 'icon', href: `${repoBase}favicon.ico` }],
    // png/svg 格式（可选）
    // ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],
  themeConfig: {
    siteTitle: 'form-cook-render',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '指南', link: '/start/what-is' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/start/what-is' },
          { text: '快速上手', link: '/start/getting-started' },
        ]
      },
      {
        text: '基础',
        items: [
          { text: '渲染组件', link: '/basics/comp-api' },
          { text: '渲染协议结构', link: '/basics/comp-schema' },
          { text: '内置组件', link: '/basics/default-comp' },
          { text: '完成一个表单', link: '/basics/create-form' },
        ]
      },
      {
        text: '表单组件',
        items: [
          { text: '基础字段', link: '/form/basics-field' },
          { text: '输入框', link: '/form/input' },
          { text: '数字输入框', link: '/form/inputNumber' },
          { text: '标签输入框', link: '/form/inputTag' },
          { text: '文本域', link: '/form/textarea' },
          { text: '单选框组', link: '/form/radioGroup' },
          { text: '评分', link: '/form/rate' },
          { text: '选择器', link: '/form/select' },
          { text: '滑块', link: '/form/slider' },
          { text: '表单域', link: '/form/form-area' },
        ]
      },
      {
        text: '布局组件',
        items: [
          { text: '基础字段', link: '/layout/basics-field' },
          { text: '容器', link: '/layout/div' },
          { text: '分栏', link: '/layout/row' },
        ]
      },
      {
        text: '进阶',
        items: [
          { text: 'schema结构', link: '/advanced/schema' },
          { text: '联动配置', link: '/advanced/dynamic' },
          { text: '选项配置', link: '/advanced/dynamic-options' },
          { text: '事件与全局函数', link: '/advanced/events' },
          { text: '自定义组件', link: '/advanced/custom' },
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
})
