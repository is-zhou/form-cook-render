# 事件与全局函数

## click

```ts:line-numbers {6-12}
{
  id: '',
  componentName: 'div',
  componentType: 'layout',
  attrs: {},
  events: [
    {
      eventName: 'click',
      handlerType: 'fn',
      fn: (formData) => console.log(formData)
    }
  ]
}
```

## change

```ts:line-numbers {13-19}
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    disabled: true,
  },
  events: [
    {
      eventName: 'change',
      handlerType: 'fn',
      fn: (formData) => console.log(formData)
    }
  ]
}
```

## input

```ts:line-numbers {13-19}
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    disabled: true,
  },
  events: [
    {
      eventName: 'input',
      handlerType: 'fn',
      fn: (formData) => console.log(formData)
    }
  ]
}
```

## focus

```ts:line-numbers {13-19}
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    disabled: true,
  },
  events: [
    {
      eventName: 'focus',
      handlerType: 'fn',
      fn: (formData) => console.log(formData)
    }
  ]
}
```

## blur

```ts:line-numbers {13-19}
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    disabled: true,
  },
  events: [
    {
      eventName: 'blur',
      handlerType: 'fn',
      fn: (formData) => console.log(formData)
    }
  ]
}
```

## validate 内置函数

```ts:line-numbers {13-20}
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    disabled: true,
  },
  events: [
    {
      eventName: 'blur',
      handlerType: 'globalFn',
      fn: undefined,
      fnName: 'validate'
    }
  ]
}
```

## resetFields 内置函数

```ts:line-numbers {13-20}
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    disabled: true,
  },
  events: [
    {
      eventName: 'blur',
      handlerType: 'globalFn',
      fn: undefined,
      fnName: 'resetFields'
    }
  ]
}
```

## submitForm 内置函数

```ts:line-numbers {13-20}
{
  id: "input1",
  componentName: "Input",
  componentType: "form",
  formItemAttrs: {
    field: "username",
    label: "用户名",
  },
  attrs: {
    placeholder: "请输入用户名",
    disabled: true,
  },
  events: [
    {
      eventName: 'blur',
      handlerType: 'globalFn',
      fn: undefined,
      fnName: 'submitForm'
    }
  ]
}
```
