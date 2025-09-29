# 基础表单组件

## input

```vue
<script lang="ts" setup>
import { ref } from "vue";
import FormCookRender from "form-cook-render";
import type { FormSchema } from "form-cook-render";
const formData = ref({});
const formSchema: FormSchema = {
  formAreaConfig: {
    attrs: {},
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
  ],
};
</script>

<template>
  <form-cook-render v-model="formData" v-model:form-schema="formSchema" />
</template>
```
