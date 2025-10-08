# 快速渲染一个表单

## 全局挂载渲染

全局挂载方式适用于整个应用都需要使用 FormCookRender 表单组件的场景。

```ts
import { createApp } from "vue";
import App from "./App.vue";
import FormCookRender from "form-cook-render";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);
app.use(ElementPlus); //挂载 ElementPlus
app.use(FormCookRender); //挂载 FormCookRender

app.mount("#app");
```

通过全局挂载，您可以在应用的任意位置如下使用 form-cook-render 组件
<demo
vue="create-form.vue"
/>

## setup 中挂载渲染

在组合式 API 风格 `setup` 中挂载

```vue
<script setup lang="ts">
import { ref } from "vue";
import { registerDefaultComps, FormCookRender } from "form-cook-render";
import type { FormSchema } from "form-cook-render";
registerDefaultComps();

const formData = ref({});
const formSchema = ref<FormSchema>({
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
    attrs: {
      labelWidth: "80px",
    },
  },
  formContentConfigList: [
    {
      id: "1",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "name", label: "姓名" },
      attrs: {
        placeholder: "请输入姓名",
      },
      defaultValue: "齐天大圣",
    },
    {
      id: "2",
      componentName: "Select",
      componentType: "form",
      formItemAttrs: { field: "region", label: "所在地区" },
      slots: {
        default: {
          componentName: "Option",
          options: [
            {
              label: "上海",
              value: "shanghai",
            },
            {
              label: "北京",
              value: "beijing",
            },
          ],
        },
      },
      attrs: {
        placeholder: "请选择地区",
      },
      defaultValue: "shanghai",
    },
    {
      id: "3",
      componentName: "SelectV2",
      componentType: "form",
      formItemAttrs: { field: "count", label: "活动次数" },
      attrs: {
        placeholder: "请选择次数",
        options: [
          {
            label: "1次",
            value: "1",
          },
          {
            label: "2次",
            value: "2",
          },
        ],
      },
      defaultValue: "2",
    },
    {
      id: "4",
      componentName: "FormItem",
      componentType: "layout",
      attrs: {
        label: "活动时间",
      },
      children: [
        {
          id: "",
          componentName: "DatePicker",
          componentType: "form",
          formItemAttrs: { field: "date1" },
          attrs: {
            placeholder: "请选择日期",
          },
          defaultValue: "",
        },
        {
          id: "",
          componentName: "TimePicker",
          componentType: "form",
          formItemAttrs: { field: "date2" },
          attrs: {
            placeholder: "请选择时间",
          },
          defaultValue: "",
        },
      ],
    },
    {
      id: "5",
      componentName: "Switch",
      componentType: "form",
      formItemAttrs: { field: "delivery", label: "即时配送" },
      attrs: {},
      defaultValue: true,
    },
    {
      id: "6",
      componentName: "Segmented",
      componentType: "form",
      formItemAttrs: { field: "location", label: "活动地点" },
      attrs: {
        options: ["家里", "公司", "学校"],
      },
      defaultValue: "学校",
    },
    {
      id: "7",
      componentName: "CheckboxGroup",
      componentType: "form",
      formItemAttrs: { field: "type", label: "活动类型" },
      attrs: {},
      slots: {
        default: {
          componentName: "Checkbox",
          options: [
            {
              value: "促销活动",
              name: "type",
              label: "促销活动",
            },
            {
              value: "线下活动",
              name: "type",
              label: "线下活动",
            },
          ],
        },
      },
      defaultValue: [],
    },
    {
      id: "8",
      componentName: "RadioGroup",
      componentType: "form",
      formItemAttrs: { field: "resource", label: "资源类型" },
      attrs: {},
      slots: {
        default: {
          componentName: "Radio",
          options: [
            {
              value: "赞助",
              label: "赞助",
            },
            {
              value: "场地",
              label: "场地",
            },
          ],
        },
      },
      defaultValue: "",
    },
    {
      id: "9",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: { field: "desc", label: "活动形式" },
      attrs: {
        type: "textarea",
        placeholder: "请输入活动形式",
      },
      defaultValue: "",
    },
  ],
});
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
