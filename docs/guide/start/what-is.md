# 什么是 Form Cook Render？

**Form Cook Render** 是一个基于 **Vue3 + Element Plus + TypeScript** 的动态表单渲染组件，通过 Schema 来快速渲染复杂表单。

- 数据对象嵌套
- 数据数组嵌套
- 表单数据校验、提交、重置
- 表单联动（显示隐藏、禁用、只读）
- 动态选项（异步渲染）
- 内置组件（可自由扩展自定义组件）、内置函数

只需提供一份 Schema 配置，就能生成一整套完整表单，无需再手写大量模板。内置 30+ 种常用表单组件此外还可以外部注册扩展 vue 组件。

<div style="display:flex;align-items:center;gap:6px;">
  <img src="https://img.shields.io/npm/v/form-cook-render?style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/npm/dt/form-cook-render?style=flat-square" alt="downloads" />
  <img src="https://img.shields.io/npm/l/form-cook-render?style=flat-square" alt="license" />
</div>

<Badges />

## 使用场景

- 管理后台的 **动态表单**
- 配置中心、低代码平台的 **表单渲染**
- 后端下发表单 Schema 的 **前端渲染器**
- 需要 **快速构建、可配置化** 表单的场景
