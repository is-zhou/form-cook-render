# select 选择器

## 基础用法

```ts
{
  id: '',
  componentName: 'select',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '选择器',
  },
  attrs: {
    options: [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
    ],
  },
}
```

## 基础多选

```ts
{
  id: '',
  componentName: 'select',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '选择器',
  },
  attrs: {
    multiple: true,//[!code ++]
    'collapse-tags': true,//[!code ++]
    'collapse-tags-tooltip': true,//[!code ++]
    'max-collapse-tags': 3,//[!code ++]
    options: [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
    ],
  },
}
```

## 其他

```ts
{
  id: '',
  componentName: 'select',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '选择器',
  },
  attrs: {
    disabled: true, //禁用 //[!code focus]
    clearable: true,//可清空 //[!code focus]
    size:"large",//尺寸 //[!code focus]
    filterable: true,//筛选选项 //[!code focus]
    "allow-create": true, //创建新的选项 //[!code focus]
    options: [
      {
        value: 'Option1',
        label: 'Option1',
        disabled: true,//禁用 //[!code focus]
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
    ],
  },
}
```
