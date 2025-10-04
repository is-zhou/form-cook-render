# inputNumber 数字输入框

## 基础用法

```ts
{
  id: "input1",
  componentName: "InputNumber",
  componentType: "form",
  formItemAttrs: {
    field: "num",
     label: "",
  },
  attrs: {
    min: 1,
    max: 10,
  },
  defaultValue: 1,
}
```

## 禁用状态

```ts
{
  id: "input1",
  componentName: "InputNumber",
  componentType: "form",
  formItemAttrs: {
    field: "num",
    label: "",
  },
  attrs: {
    min: 1,
    max: 10,
    disabled: true,//[!code ++]
  },
  defaultValue: 1,
}
```

## 步进

```ts
{
  id: "input1",
  componentName: "InputNumber",
  componentType: "form",
  formItemAttrs: {
    field: "num",
    label: "",
  },
  attrs: {
    min: 1,
    max: 10,
    step: 2,//[!code ++]
    'step-strictly':true,// 开启严格步进 //[!code ++]
  },
  defaultValue: 1,
}
```

## 精度

```ts
{
  id: "input1",
  componentName: "InputNumber",
  componentType: "form",
  formItemAttrs: {
    field: "num",
    label: "",
  },
  attrs: {
    min: 1,
    max: 10,
    precision: 2,//[!code ++]
  },
  defaultValue: 1,
}
```

## 不同的输入框尺寸

```ts
{
  id: "input1",
  componentName: "InputNumber",
  componentType: "form",
  formItemAttrs: {
    field: "num",
    label: "",
  },
  attrs: {
    min: 1,
    max: 10,
    size: 'large', //'small'|'default' //[!code ++]
  },
  defaultValue: 1,
}
```

## 按钮位置

```ts
{
  id: "input1",
  componentName: "InputNumber",
  componentType: "form",
  formItemAttrs: {
    field: "num",
    label: "",
  },
  attrs: {
    min: 1,
    max: 10,
    'controls-position': 'right',  //[!code ++]
  },
  defaultValue: 1,
}
```

## 带前缀和后缀

```ts
{
  id: "input1",
  componentName: "InputNumber",
  componentType: "form",
  formItemAttrs: {
    field: "num",
    label: "",
  },
  attrs: {
    min: 1,
    max: 10,
    step: 2,
  },
  slots: { //[!code ++]
    prefix: { //[!code ++]
      componentName: "span", //[!code ++]
      text: "￥", //[!code ++]
    }, //[!code ++]
  }, //[!code ++]
  defaultValue: 1,
}
```

```ts
{
  id: "input1",
  componentName: "InputNumber",
  componentType: "form",
  formItemAttrs: {
    field: "num",
    label: "",
  },
  attrs: {
    min: 1,
    max: 10,
    step: 2,
  },
  slots: { //[!code ++]
    suffix: { //[!code ++]
      componentName: "span", //[!code ++]
      text: "RMB", //[!code ++]
    }, //[!code ++]
  }, //[!code ++]
  defaultValue: 1,
}
```
