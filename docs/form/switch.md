# switch 开关

## 基础用法

```ts
{
  id: '',
  componentName: 'switch',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '开关',
  },
  attrs: {},
}
```

## 自定义颜色

```ts
{
  id: '',
  componentName: 'switch',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '开关',
  },
  attrs: {
    style:"--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949",//[!code ++]
  },
}
```

## 文字描述

```ts
{
  id: '',
  componentName: 'switch',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '开关',
  },
  attrs: {
    'active-text':"Pay by month",//[!code ++]
    'inactive-text':"Pay by year",//[!code ++]
    'inline-prompt':true,//[!code ++]
  },
}
```

## 扩展的 value 类型

```ts
{
  id: '',
  componentName: 'switch',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '开关',
  },
  attrs: {
    'active-value': 'true',//[!code ++]
    'inactive-value': 'false',//[!code ++]
  },
}
```

## 其他

```ts
{
  id: '',
  componentName: 'switch',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '开关',
  },
  attrs: {
     disabled: true, //禁用 //[!code focus]
     loading: true, //加载状态 //[!code focus]
     size:"large",//尺寸 //[!code focus]
  },
}
```
