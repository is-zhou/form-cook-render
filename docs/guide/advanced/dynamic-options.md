# options

## 动态函数

<demo vue="dynamic-options/Fn.vue"></demo>

```ts:line-numbers {10-25}
{
  id: '',
  componentName: 'Select',
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
  componentName: 'Select',
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
