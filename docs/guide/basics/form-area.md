# 表单域配置 FormAreaConfig

## 默认按钮

- 显示默认创建、重置按钮`defaultCreateBtn` `defaultRestBtn`

```ts
interface FormAreaConfig {
  // 表单域默认创建按钮
  defaultCreateBtn?: string | boolean;
  // 表单域默认重置按钮
  defaultRestBtn?: string | boolean;
  ...
}
```

<demo
vue="form-area/DefaultBtn.vue"
/>

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

## 行内表单

表单中的所有子组件都继承了该表单的 inline 属性。 同样，form-item 也有一个 inline 属性。

```ts
interface FormAreaConfig {
  ...
  // 表单域属性配置
  attrs: {
    ...
    //行内表单模式
    inline?: boolean;
  };
  ...
}
```

<demo vue="form-area/InlineForm.vue"></demo>

## 校验规则

表单中的所有子组件都继承了该表单的 rules 属性。 同样，form-item 也有一个 rules 属性。

```ts
interface FormAreaConfig {
  ...
  // 表单域属性配置
  attrs: {
    ...
    //表单校验规则
    rules?: FormRules;
  };
  ...
}
```

<demo vue="form-area/FormRules.vue"></demo>

```ts
import type { FormSchema } from "form-cook-render";

const formSchema: FormSchema = {
  ...
  formAreaConfig: {
    ...
    attrs: {
      //校验规则
      rules?: FormRules;// [!code focus]
      ...
    },
  },
  ...
};
```

## 标签宽度及位置

表单中的所有子组件都继承了该表单的 标签宽度及位置 属性。 同样，form-item 也有一个 标签宽度及位置 属性。

```ts
interface FormAreaConfig {
  ...
  // 表单域属性配置
  attrs: {
    ...
    //标签宽度
    labelWidth: string | number;
    //标签位置
    labelPosition: 'left' | 'right' | 'top';
  };
  ...
}
```

<demo vue="form-area/Label.vue"></demo>

## 组件大小及禁用

```ts
interface FormAreaConfig {
  ...
  attrs: {
    //组件大小
    size?: "large" | "default" | "small";
    //禁用表单
    disabled?: boolean;
    ...
  };
  ...
}
```

<demo vue="form-area/Size.vue"></demo>

## 其他属性

| 属性名          |                 说明                 |   类型    | 默认值 |
| --------------- | :----------------------------------: | :-------: | :----: |
| show-message    |         是否显示校验错误信息         | `boolean` |  true  |
| inline-message  |      是否以行内形式展示校验信息      | `boolean` | false  |
| status-icon     |  是否在输入框中显示校验结果反馈图标  | `boolean` | false  |
| rules           |             表单验证规则             | `object`  |   -    |
| scroll-to-error | 当校验失败时，滚动到第一个错误表单项 | `boolean` |   -    |
