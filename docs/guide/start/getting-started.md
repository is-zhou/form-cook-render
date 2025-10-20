# 快速开始

## 安装

::: code-group

```sh [npm]
$ npm add form-cook-render
```

```sh [pnpm]
$ pnpm add form-cook-render
```

```sh [yarn]
$ yarn add form-cook-render
```

:::tip
如果项目中没有安装`element-plus`的话，同时需要运行`pnpm install element-plus`来安装 ElementPlus 框架。
:::

## 全局注册

在 `main.ts` 中引入并注册 FormCookRender

```ts
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import FormCookRender from "form-cook-render";

const app = createApp(App);

app.use(FormCookRender); // 挂载 FormCookRender

app.use(ElementPlus); //挂载ElementPlus

app.mount("#app");
```

:::tip
FormCookRender 中内置了常用的表单组件`app.use(FormCookRender)` 的时候会注册这些内置组件。
:::

## 局部注册

在组合式 API 风格 `setup` 函数中使用 FormCookRender

```vue
<script setup lang="ts">
import { FormCookRender, registerDefaultComps } from "form-cook-render";
registerDefaultComps();
</script>
```

:::tip
FormCookRender 非插件方式挂载的时候，需要手动导入及手动导入调用注册内置组件函数`registerDefaultComps()`来注册组件。
:::
