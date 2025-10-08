# 表单域配置 FormAreaConfig

## 默认按钮

- 配置表单的默认按钮，创建按钮、重置按钮
- 显示默认创建、重置按钮`defaultCreateBtn` `defaultRestBtn`

```ts
import type { FormSchema } from "form-cook-render";

const formSchema: FormSchema = {
  formAreaConfig: {
    defaultCreateBtn: true, // [!code focus]
    defaultRestBtn: true, // [!code focus]
    attrs: {},
  },
};
```

- 自定义按钮文本

```ts
import type { FormSchema } from "form-cook-render";

const formSchema: FormSchema = {
  formAreaConfig: {
    defaultCreateBtn: "提交", // [!code focus]
    defaultRestBtn: "重置", // [!code focus]
    attrs: {},
  },
};
```

### 完整示例

```vue
<script lang="ts" setup>
import { ref } from "vue";
import FormCookRender from "form-cook-render";
import type { FormSchema } from "form-cook-render";
const formData = ref({});
const formSchema: FormSchema = {
  formAreaConfig: {
    defaultCreateBtn: "提交",
    defaultRestBtn: "重置",
    attrs: {},
  },
  formContentConfigList: [],
};
</script>

<template>
  <form-cook-render v-model="formData" v-model:form-schema="formSchema" />
</template>
```

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
      componentName: "Input",
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
