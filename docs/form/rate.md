# rate 评分

## 基础用法

```ts
{
  id: '',
  componentName: 'Rate',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '评分',
  },
  attrs: {},
}
```

## 等级颜色

```ts
{
  id: "",
  componentName: "Rate",
  componentType: "form",
  formItemAttrs: {
    field: "",
    label: "评分",
  },
  attrs: {
    colors: ["#99A9BF", "#F7BA2A", "#FF9900"], // [!code ++]
  },
},
```

## 辅助文字

```ts
{
  id: "",
  componentName: "Rate",
  componentType: "form",
  formItemAttrs: {
    field: "",
    label: "评分",
  },
  attrs: {
    texts:['oops', 'disappointed', 'normal', 'good', 'great']// [!code ++]
    'show-text':true,// [!code ++]
  },
},
```

## 允许半选

```ts
{
  id: "",
  componentName: "Rate",
  componentType: "form",
  formItemAttrs: {
    field: "",
    label: "评分",
  },
  attrs: {
    'allow-half':true,// [!code ++]
  },
},
```

## 其他

```ts
{
  id: "",
  componentName: "Rate",
  componentType: "form",
  formItemAttrs: {
    field: "",
    label: "评分",
  },
  attrs: {
    disabled: true, //禁用 //[!code focus]
    clearable: true,//可清空 //[!code focus]
    size:"large",//尺寸 //[!code focus]
  },
}
```
