# Row Col 分栏

## 基础用法

```ts
{
  id: "",
  componentName: "ArrayContainer",
  componentType: "layout",
  attrs: {
    //必须配置 arrayKeyPath 字段，指 formData 到动态数组的路径
    arrayKeyPath: "arrayDesc",
  },
  children: [
    {
      id: "content",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "content",
        label: "活动形式",
        rules: [
          { required: true, message: "请输入活动形式", trigger: "blur" },
        ],
      },
      attrs: { type: "textarea", placeholder: "请输入活动形式" },
      defaultValue: "活动形式是...",
    },
  ],
}
```

## 自定义按钮文本

```ts
{
  id: "",
  componentName: "ArrayContainer",
  componentType: "layout",
  attrs: {
    //必须配置 arrayKeyPath 字段，指 formData 到动态数组的路径
    arrayKeyPath: "arrayDesc",
    addText: "新增活动项",//[!code ++]
    removeText: "删除",//[!code ++]
  },
  children: [
    {
      id: "content",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "content",
        label: "活动形式",
        rules: [
          { required: true, message: "请输入活动形式", trigger: "blur" },
        ],
      },
      attrs: { type: "textarea", placeholder: "请输入活动形式" },
      defaultValue: "活动形式是...",
    },
  ],
}
```

## 通过插槽自定义按钮

```ts
{
  id: "",
  componentName: "ArrayContainer",
  componentType: "layout",
  attrs: {
    //必须配置 arrayKeyPath 字段，指 formData 到动态数组的路径
    arrayKeyPath: "arrayDesc",
  },
  children: [
    {
      id: "content",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "content",
        label: "活动形式",
        rules: [
          { required: true, message: "请输入活动形式", trigger: "blur" },
        ],
      },
      attrs: { type: "textarea", placeholder: "请输入活动形式" },
      defaultValue: "活动形式是...",
    },
  ],
  slots: {
    add: "新增活动项",//[!code ++]
    del: "删除",//[!code ++]
  },
}
```

## 表单项最大最小数量及联动按钮

```ts
{
  id: "",
  componentName: "ArrayContainer",
  componentType: "layout",
  attrs: {
    //必须配置 arrayKeyPath 字段，指 formData 到动态数组的路径
    arrayKeyPath: "arrayDesc",
    min: 1,//[!code ++]
    max: 3,//[!code ++]
    limitButtonDisplay: true,//[!code ++]
  },
  children: [
    {
      id: "content",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "content",
        label: "活动形式",
        rules: [
          { required: true, message: "请输入活动形式", trigger: "blur" },
        ],
      },
      attrs: { type: "textarea", placeholder: "请输入活动形式" },
      defaultValue: "活动形式是...",
    },
  ],
}
```

## 新增时是否添加默认值

```ts
{
  id: "",
  componentName: "ArrayContainer",
  componentType: "layout",
  attrs: {
    //必须配置 arrayKeyPath 字段，指 formData 到动态数组的路径
    arrayKeyPath: "arrayDesc",
    isSetDefaultValue: false,//[!code ++]
  },
  children: [
    {
      id: "content",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "content",
        label: "活动形式",
        rules: [
          { required: true, message: "请输入活动形式", trigger: "blur" },
        ],
      },
      attrs: { type: "textarea", placeholder: "请输入活动形式" },
      defaultValue: "活动形式是...",
    },
  ],
}
```

## 自定义容器层样式

```ts
{
  id: "",
  componentName: "ArrayContainer",
  componentType: "layout",
  attrs: {
    //必须配置 arrayKeyPath 字段，指 formData 到动态数组的路径
    arrayKeyPath: "arrayDesc",
    style_container: "background-color: #ff0000", //自定义最外层容器样式 //[!code ++]
    style_item_wrap: "background-color: #1b1b1f", //自定义项容器样式 //[!code ++]
    style_item_content: "background-color: #409eff", //自定义动态项容器样式 //[!code ++]
    style_btnAdd_container: "background-color: #409eff", //自定义新增按钮容器样式 //[!code ++]
    style_btnDel_container: "background-color: #409eff", //自定义删除按钮容器样式 //[!code ++]
  },
  children: [
    {
      id: "content",
      componentName: "Input",
      componentType: "form",
      formItemAttrs: {
        field: "content",
        label: "活动形式",
        rules: [
          { required: true, message: "请输入活动形式", trigger: "blur" },
        ],
      },
      attrs: { type: "textarea", placeholder: "请输入活动形式" },
      defaultValue: "活动形式是...",
    },
  ],
}
```
