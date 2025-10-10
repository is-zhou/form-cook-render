# 表单项配置

## 字段和标签配置

- 字段 `formItemAttrs.field`
- 标签文本 `formItemAttrs.label`
- 标签长度 `formItemAttrs.labelWidth`
- 标签位置 `formItemAttrs.labelPosition`

```ts
interface FormCompConfig extends BaseConfig {
  ...
  formItemAttrs: {
    //字段
    field: string;
    //标签
    label?: string;
    //标签位置
    labelPosition?:'left' | 'right' | 'top';
    //标签长度
    labelWidth?: string | number;
    ...
  };
  ...
}
```

<demo vue="form-item/FieldLabel.vue"></demo>

## 必填和校验规则

- 必填 `formItemAttrs.required	`
- 校验规则 `formItemAttrs.rules`

```ts
interface FormCompConfig extends BaseConfig {
  ...
  formItemAttrs: {
    //必填
    required?: boolean;
    //校验规则
    rules?: FormRules;
    ...
  };
  ...
}
```

<demo vue="form-item/RequiredRules.vue"></demo>

## 表单项组件大小

- 必填 `formItemAttrs.size`

```ts
interface FormCompConfig extends BaseConfig {
  ...
  formItemAttrs: {
    //表单项组件大小
    size?: '' | 'large' | 'default' | 'small';
    ...
  };
  ...
}
```

<demo vue="form-item/Size.vue"></demo>
