# InputTag 输入框

## 基础用法

按 Enter 回车键添加输入内容为标签

```ts
{
  id: "",
  componentName: "InputTag",
  componentType: "form",
  formItemAttrs: {
    field: "input",
    label: "",
  },
  attrs: {
    placeholder: "请输入",
  },
}
```

## 自定义触发器

```ts
{
  id: "",
  componentName: "InputTag",
  componentType: "form",
  formItemAttrs: {
    field: "input",
    label: "",
  },
  attrs: {
    placeholder: "请输入",
    trigger:"Enter" // "Enter"|"Space" //[!code ++]
  },
}
```

## 最大标签数

```ts
{
  id: "",
  componentName: "InputTag",
  componentType: "form",
  formItemAttrs: {
    field: "input",
    label: "",
  },
  attrs: {
    placeholder: "请输入",
    max:3  //[!code ++]
  },
}
```

## 折叠标签

```ts
{
  id: "",
  componentName: "InputTag",
  componentType: "form",
  formItemAttrs: {
    field: "input",
    label: "",
  },
  attrs: {
    placeholder: "请输入",
    'collapse-tags':true, //[!code ++]
    'collapse-tags-tooltip'：true,//[!code ++]
    'max-collapse-tags':3,//[!code ++]
  },
}
```

## 可拖放

```ts
{
  id: "",
  componentName: "InputTag",
  componentType: "form",
  formItemAttrs: {
    field: "input",
    label: "",
  },
  attrs: {
    placeholder: "请输入",
    draggable: true, //[!code ++]
  }, //[!code ++]
  defaultValue: ["tag1", "tag2", "tag3"], //[!code ++]
}
```

## 其他

```ts
{
  id: "",
  componentName: "InputTag",
  componentType: "form",
  formItemAttrs: {
    field: "input",
    label: "",
  },
  attrs: {
    placeholder: "请输入",
    disabled: true, //禁用 //[!code focus]
    clearable: true,//可清空 //[!code focus]
    delimiter:',', //分隔符 //[!code focus]
    size:"large",//尺寸 //[!code focus]
  },
}
```
