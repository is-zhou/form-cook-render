# options

## 静态选项

```ts:line-numbers {10-23}
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

## 动态函数

```ts:line-numbers {10-25}
{
  id: '',
  componentName: 'select',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '选择器',
  },
  attrs: {
    options: (params) =>
      new Promise((res) => {
        setTimeout(() => {
          const list=[
              {
                label: "1",
                value: "1",
              },
              {
                label: "2",
                value: "2",
              },
            ]
          res([ list, ["activity.name"]]);
        }, 1000);
      }),
  },
}
```

## 远程请求

```ts:line-numbers {10-14}
{
  id: '',
  componentName: 'select',
  componentType: 'form',
  formItemAttrs: {
    field: '',
    label: '选择器',
  },
  attrs: {
    options: {
      url: '请求地址',
      method: 'GET',
      map: (res) => res.data ? [res.data, null] : [[], null]
    },
  },
}
```
