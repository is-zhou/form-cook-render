# input 输入框

## 基础用法

```ts
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
  }
}
```

## 禁用状态

```ts
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    disabled: true, // [!code ++]
  }
}
```

## 一键清空

```ts
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    clearable: true, // [!code ++]
  }
}
```

## 格式化

```ts
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    formatter: (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),// [!code ++]
    parser: (value) => value.replace(/\$\s?|(,*)/g, ""),// [!code ++]
  }
}
```

## 密码框

```ts
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "password",
    label: "密码",
  },
  attrs: {
    placeholder: "请输入密码",
    type: "password", // [!code ++]
    'show-password': true,// [!code ++]
  }
}
```

## 带图标的输入框

```ts
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    'suffix-icon': Calendar,// [!code ++]
    //'prefix-icon': Search // [!code ++]
  }
}
```

:::tip
图标组件需要提前手动导入

`import { Calendar, Search } from "@element-plus/icons-vue";`
:::

## 复合型输入框

```ts

  {
    id: "input1",
    componentName: "Input",
    componentType: "form",
    formItemAttrs: {
      field: "input1",
      label: "",
    },
    attrs: {
      placeholder: "请输入",
    },
    slots: {// [!code ++]
      prepend: {// [!code ++]
        componentName: "span",// [!code ++]
        text: "Http://",// [!code ++]
      },// [!code ++]
    },// [!code ++]
  }
```

```ts
  {
    id: "input2",
    componentName: "Input",
    componentType: "form",
    formItemAttrs: {
      field: "input2",
      label: "",
    },
    attrs: {
      placeholder: "请输入",
    },
    slots: {// [!code ++]
      append: {// [!code ++]
        componentName: "span",// [!code ++]
        text: ".com",// [!code ++]
      },// [!code ++]
    },// [!code ++]
  }
```

## 尺寸

```ts
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    size: 'large', // 'small'|'default' // [!code ++]
  }
}
```

## 输入长度限制

```ts
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    maxlength: '10',  // [!code ++]
    "show-word-limit": true, // [!code ++]
  }
}
```

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
  ],
};
</script>

<template>
  <form-cook-render v-model="formData" v-model:form-schema="formSchema" />
</template>
```
