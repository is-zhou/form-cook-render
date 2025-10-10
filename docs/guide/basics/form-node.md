# 表单节点配置

## 默认值

```ts
interface FormCompConfig extends BaseConfig {
  ...
  //默认值
  defaultValue?: unknown;
  ...
}
```

<demo
vue="form-node/DefaultValue.vue"
/>

## 可见、禁用、只读

```ts
interface FormCompConfig extends BaseConfig {
  ...
  //组件属性
  attrs: Attrs & {
    //禁用配置
    disabled?: boolean | DynamicProp<boolean>;
    //只读配置
    readonly?: boolean | DynamicProp<boolean>;
    ...
  };
  visible?: boolean | DynamicProp<boolean>;
  ...
}
```

<demo
vue="form-node/Visible.vue"
/>
