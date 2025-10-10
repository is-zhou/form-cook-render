# 组件联动

## 显示隐藏联动 visible

表单组件和布局组件都可通过 `visible` 和数据进行动态控制`显示隐藏`

- 开启即时配送才需要输入姓名
  <demo vue="dynamic/Visible.vue"></demo>

```ts
visible(params{
  formData: Record<string, any>;
  schemaItem: ComponentConfig;
}) {
    return params.formData.count === "1";
}
```

## 表单禁用联动 disabled

- 开启即时配送才可以输入姓名
  <demo vue="dynamic/Disabled.vue"></demo>

```ts
disabled(params{
  formData: Record<string, any>;
  schemaItem: ComponentConfig;
}) {
    return params.formData.count === "1";
}
```

## 表单只读联动 readonly

- 开启即时配送才可以修改姓名
  <demo vue="dynamic/Readonly.vue"></demo>

```ts
readonly(params{
  formData: Record<string, any>;
  schemaItem: ComponentConfig;
}) {
    return params.formData.count === "1";
}
```

## 表单配置联动

- 开启即时配送第二项 **姓名** 修改为 **配送员**
  <demo vue="dynamic/Config.vue"></demo>
