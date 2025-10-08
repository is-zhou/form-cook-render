# Radio 单选框组

## 基础用法

```ts
{
  id: '',
  componentName: 'RadioGroup',
  componentType: 'form',
  formItemAttrs: { field: '', label: '单选框' },
  slots: {
    default: {
      componentName: 'Radio',
      options: [
        { value: 'large', label: 'large' },
        { value: 'default', label: 'default' },
        { value: 'small', label: 'small' },
      ],
    }
  },
  attrs: {},
}
```

## 禁用选项

```ts
{
  id: '',
  componentName: 'RadioGroup',
  componentType: 'form',
  formItemAttrs: { field: '', label: '单选框' },
  slots: {
    default: {
      componentName: 'Radio',
      options: [
        { value: 'large', label: 'large' }, //[!code --]
        { value: 'large', label: 'large', disabled: true }, //[!code ++]
        { value: 'default', label: 'default' },
        { value: 'small', label: 'small' },
      ],
    }
  },
  attrs: {},
}
```

## Options 属性

```ts
{
  id: "",
  componentName: "RadioGroup",
  componentType: "form",
  formItemAttrs: { field: "", label: "单选框" },
  attrs: {//[!code ++]
    options: [//[!code ++]
      { value: "large", label: "large" },//[!code ++]
      { value: "default", label: "default" },//[!code ++]
      { value: "small", label: "small" },//[!code ++]
    ],//[!code ++]
  },//[!code ++]
},
```

## 按钮模式

```ts
{
  id: '',
  componentName: 'RadioGroup',
  componentType: 'form',
  formItemAttrs: { field: '', label: '单选框' },
  slots: {
    default: {
      componentName: 'Radio',//[!code --]
      componentName: 'RadioButton',//[!code ++]
      options: [
        { value: 'large', label: 'large' },
        { value: 'default', label: 'default' },
        { value: 'small', label: 'small' },
      ],
    }
  },
  attrs: {},
}
```
