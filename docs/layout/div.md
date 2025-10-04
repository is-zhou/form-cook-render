# div 容器

## 基础用法

```ts
{
  id: '',
  componentName: 'div',
  componentType: 'layout',
  attrs: {},
  children: [],
  style: {},
}
```

## 添加表单组件

```ts
{
  id: '',
  componentName: 'div',
  componentType: 'layout',
  attrs: {},
  children: [
    {// [!code ++]
      id: "input1",// [!code ++]
      componentName: "Input",// [!code ++]
      componentType: "form",// [!code ++]
      formItemAttrs: {// [!code ++]
        field: "username",// [!code ++]
        label: "用户名",// [!code ++]
      },// [!code ++]
      attrs: {// [!code ++]
        placeholder: "请输入用户名",// [!code ++]
      }// [!code ++]
    }// [!code ++]
  ],
  style: {},
}
```
