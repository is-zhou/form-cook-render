# Slider 滑块

## 基础用法

```ts
{
  id: '',
  componentName: 'Slider',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '滑块',
  },
  attrs: {},
  defaultValue: 0
}
```

## 离散值

```ts
{
  id: '',
  componentName: 'Slider',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '滑块',
  },
  attrs: {
    step: 10, //[!code ++]
    'show-stops': true, //[!code ++]
  },
  defaultValue: 0
}
```

## 带有输入框的滑块

```ts
{
  id: '',
  componentName: 'Slider',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '滑块',
  },
  attrs: {
    'show-input': true, //[!code ++]
  },
  defaultValue: 0
}
```

## 位置

```ts
{
  id: '',
  componentName: 'Slider',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '滑块',
  },
  attrs: {
    placement: 'bottom',// 'bottom'|'right'|'left' //[!code ++]
  },
  defaultValue: 0
}
```

## 范围选择

```ts
{
  id: '',
  componentName: 'Slider',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '滑块',
  },
  attrs: {
    range: true, //[!code ++]
    max: 10, //[!code ++]
    'show-stops': true,   //[!code ++]
  },
  defaultValue: 0
}
```

## 垂直模式

```ts
{
  id: '',
  componentName: 'Slider',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '滑块',
  },
  attrs: {
    vertical: true, //[!code ++]
    height: '200px',//启用垂直模式,必须设置 height 属性 //[!code ++]
  },
  defaultValue: 0
}
```

## 其他

```ts
{
  id: '',
  componentName: 'Slider',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '滑块',
  },
  attrs: {
    'show-tooltip': false, //关闭提示 //[!code focus]
    disabled: true, //禁用 //[!code focus]
    size:"large",//尺寸 //[!code focus]
    debounce: 1000,//输入时的去抖延迟 //[!code focus]
  },
  defaultValue: 0
}
```
