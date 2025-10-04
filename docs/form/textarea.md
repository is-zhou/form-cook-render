# textarea 文本域

## 基础用法

```ts
{
  id: "input1",
  componentName: "Textarea",
  componentType: "form",
  formItemAttrs: {
    field: "input",
    label: "",
  },
  attrs: {
    placeholder: "请输入",
    type: 'textarea',
  }
}
```

## 文本域高度

```ts
{
  id: "input1",
  componentName: "Textarea",
  componentType: "form",
  formItemAttrs: {
    field: "input",
    label: "",
  },
  attrs: {
    placeholder: "请输入",
    type: 'textarea',
    rows:2, //[!code ++]
  }
}
```

## 自适应文本域

```ts
{
  id: "input1",
  componentName: "Textarea",
  componentType: "form",
  formItemAttrs: {
    field: "input",
    label: "",
  },
  attrs: {
    placeholder: "请输入",
    type: 'textarea',
    autosize: true, //[!code ++]
    //autosize: { minRows: 2, maxRows: 4 }, //[!code ++]
  }
}
```

## 输入长度限制

```ts
{
  id: "input1",
  componentName: "Textarea",
  componentType: "form",
  formItemAttrs: {
    field: "input",
    label: "",
  },
  attrs: {
    placeholder: "请输入",
    type: 'textarea',
    maxlength: 30, //[!code ++]
    'show-word-limit':true,//[!code ++]
  }
}
```
