# form-cook-render

一个基于 Vue 3 + Element Plus 的表单渲染器，通过 Schema 配置即可动态生成表单。
支持扩展组件、远程/动态选项、全局函数事件绑定等，方便在低代码、表单设计器、可视化平台中使用。

<div align="center">

![npm](https://img.shields.io/npm/v/form-cook-render?style=flat-square)
![npm](https://img.shields.io/npm/dt/form-cook-render?style=flat-square)
![NPM](https://img.shields.io/npm/l/form-cook-render?style=flat-square)

</div>

✨ 特性

📦 开箱即用：只需传入 formSchema，即可生成完整表单。

🎨 Element Plus 生态：内置支持多种 Element Plus 表单组件。

🧩 可扩展：支持通过 declare module 扩展自定义组件。

🔄 动态属性：属性支持函数/异步函数动态计算，自动监听依赖更新。

🌐 远程数据源：内置远程请求配置，自动映射成表单选项。

⚡ 全局函数：支持在 schema 中绑定全局函数，调用渲染器暴露的接口。

🛠 类型安全：TypeScript 类型完整声明，方便开发与扩展。

## 📦 安装

```bash
npm install form-cook-render
# or
yarn add form-cook-render
# or
pnpm add form-cook-render

```

🚀 快速使用

```vue
<script setup lang="ts">
import { ref } from "vue";
import FormCookRender, {
  defaultComponents,
  registerComponents,
} from "form-cook-render";
import type { FormSchema } from "form-cook-render";
registerComponents(defaultComponents());

const formData = ref({});
const formSchema: FormSchema = {
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
    attrs: {
      labelWidth: "80px",
    },
  },
  formContentConfigList: [
    {
      id: "input1",
      componentName: "input",
      componentType: "form",
      formItemAttrs: {
        field: "username",
        label: "用户名",
        required: true,
      },
      attrs: {
        placeholder: "请输入用户名",
      },
    },
    {
      id: "select1",
      componentName: "select",
      componentType: "form",
      formItemAttrs: {
        field: "gender",
        label: "性别",
      },
      attrs: {
        options: [
          { label: "男", value: "male" },
          { label: "女", value: "female" },
        ],
      },
    },
  ],
};
</script>

<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  />
</template>
```

全局安装使用

```ts
import { createApp } from "vue";
import App from "./App.vue";
import formRender from "form-cook-render";

const app = createApp(App);

app.use(formRender, {
  components: {},
});

app.mount("#app");
```

## 📐 Schema 结构

```ts
export interface FormSchema {
  formAreaConfig: FormAreaConfig;
  formContentConfigList: ComponentConfig[];
}
```

- formAreaConfig：表单整体配置

- formContentConfigList：表单项/布局项配置数组
