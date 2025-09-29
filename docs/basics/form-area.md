# 表单域属性配置 FormAreaConfig

## Attributes

| 属性名         |                                          说明                                           |           类型            | 默认值 |
| -------------- | :-------------------------------------------------------------------------------------: | :-----------------------: | :----: |
| rules          |                                      表单验证规则                                       |         `object`          |   -    |
| inline         |                                      行内表单模式                                       |         `boolean`         | false  |
| size           |                               用于控制该表单内组件的尺寸                                | `large` `default` `small` |   -    |
| label-position |       表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性       |   `left` `right` `top`    | right  |
| disabled       |     是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性      |          boolean          | false  |
| labelWidth     | 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。 |       string/number       |   -    |
| labelSuffix    |                                    表单域标签的后缀                                     |          string           |   -    |

```ts
interface FormAreaConfig {
  defaultCreateBtn?: string | boolean;
  defaultRestBtn?: string | boolean;
  attrs: {
    rules?: FormRules;
    inline?: boolean;
    size?: "" | "large" | "default" | "small";
    disabled?: boolean;
    labelPosition?: "left" | "right" | "top";
    labelWidth?: number | string;
    labelSuffix?: string;
    hideRequiredAsterisk?: boolean;
    requireAsteriskPosition?: "left" | "right";
    [key: string]: unknown;
  };
}
```

## rules 校验规则

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
    rules: {
      name: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
        {
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur",
        },
      ],
      region: [
        {
          required: true,
          message: "Please select Activity zone",
          trigger: "change",
        },
      ],
    },
  },
  formContentConfigList: [
    {
      id: "1",
      componentName: "input",
      componentType: "form",
      formItemAttrs: { field: "activity.name", label: "名称" },
      attrs: {
        placeholder: "请输入名称",
      },
      defaultValue: "齐天大圣",
    },
  ],
};
</script>

<template>
  <form-cook-render v-model="formData" v-model:form-schema="formSchema" />
</template>
```

## 全局函数调用

内置 schema 中的 `events`：

- `validate()`
- `submitForm()`
- `resetForm()`
