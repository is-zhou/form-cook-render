# 布局节点配置

## 子节点组件配置

```ts
interface FormCompConfig extends BaseConfig {
  ...
  //默认值
  children?: Array<ComponentConfig | string>;
  ...
}
```

<demo
vue="layout-node/ChildNode.vue"
/>

## 子节点文本配置

<demo
vue="layout-node/ChildNodeText.vue"
/>

```ts
interface FormCompConfig extends BaseConfig {
  ...
  //默认值
  children?: Array<ComponentConfig | string>;
  ...
}
```

## 节点样式配置

```ts
interface FormCompConfig extends BaseConfig {
  ...
  attrs: {
    ...
    //节点样式配置
     style?: string | Record<string, unknown>;
  },
  ...
}
```

<demo
vue="layout-node/ChildNodeStyle.vue"
/>
