# 动态字段

支持动态函数

```ts
type DynamicProp<T> = (params: {
  formData: Record<string, any>;
  schemaItem: ComponentConfig;
}) => T | void;
```

选项数据支持 静态数组 / 动态函数 / 远程请求：

```ts
type OptionsConfig = Option[] | DynamicPropOption<Option[]> | remoteType;
```

### visible 是否可见

动态配置 ComponentConfig 渲染时是否动态可见

```ts
visible(params{
  formData: Record<string, any>;
  schemaItem: ComponentConfig;
}) {
    return params.formData.count === "1";
}
```

### disabled 是否禁用

动态配置表单渲染时是否禁用

```ts
disabled(params{
  formData: Record<string, any>;
  schemaItem: ComponentConfig;
}) {
    return params.formData.count === "1";
}
```

### readonly 是否只读

动态配置表单渲染时是否只读

```ts
readonly(params{
  formData: Record<string, any>;
  schemaItem: ComponentConfig;
}) {
    return params.formData.count === "1";
}
```
