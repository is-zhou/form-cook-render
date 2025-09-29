# 表单域默认按钮

配置表单的默认按钮，创建按钮、重置按钮

## 默认按钮

显示默认创建、重置按钮`defaultCreateBtn` `defaultRestBtn`

```ts
import type { FormSchema } from "form-cook-render";

const formSchema: FormSchema = {
  formAreaConfig: {
    defaultCreateBtn: true, // [!code focus]
    defaultRestBtn: true, // [!code focus]
  },
};
```

自定义按钮文本

```ts
import type { FormSchema } from "form-cook-render";

const formSchema: FormSchema = {
  formAreaConfig: {
    defaultCreateBtn: "提交", // [!code focus]
    defaultRestBtn: "重置", // [!code focus]
  },
};
```

## 完整代码

```vue
<script lang="ts" setup>
import { ref } from "vue";
import FormCookRender from "../../src/index.ts";
import type { FormSchema } from "form-cook-render";
const formData = ref({});
const formSchema: FormSchema = {
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
  },
  formContentConfigList: [],
};
</script>

<template>
  <form-cook-render v-model="formData" v-model:form-schema="formSchema" />
</template>
```
