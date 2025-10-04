# 快速完成一个表单

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
      componentName: "Input",
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
      componentName: "Select",
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
