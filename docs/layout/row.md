# row col 分栏

## 基础用法

一行两列

```ts
{
  id: '',
  componentName: 'Row',
  componentType: 'layout',
  attrs: {},
  children: [
    {
      id: '',
      componentName: 'Col',
      componentType: 'layout',
      attrs: {
        span: 12
      },
      children: [],
      style: {},
    },
    {
      id: '',
      componentName: 'Col',
      componentType: 'layout',
      attrs: {
        span: 12
      },
      children: [],
      style: {},
    }
  ],
  style: {},
}
```

## 列偏移

```ts
{
  id: '',
  componentName: 'Row',
  componentType: 'layout',
  attrs: {},
  children: [
    {
      id: '',
      componentName: 'Col',
      componentType: 'layout',
      attrs: {
        span: 6,

      },
      children: [],
      style: {},
    },
    {
      id: '',
      componentName: 'Col',
      componentType: 'layout',
      attrs: {
        span: 6,
        offset: 6,//[!code ++]
      },
      children: [],
      style: {},
    }
  ],
  ...
}
```

## 列间距

```ts
{
  id: '',
  componentName: 'Row',
  componentType: 'layout',
  attrs: {
    gutter: 20,//[!code ++]
  },
  ...
}
```

## 列对齐方式

```ts
{
  id: '',
  componentName: 'Row',
  componentType: 'layout',
  attrs: {
    justify: 'center', //'center'|'end'|'space-between'|'space-around'|'space-evenly' //[!code ++]
  },
  ...
}
```

## 响应式布局

```ts
{
  id: '',
  componentName: 'Row',
  componentType: 'layout',
  attrs: {},
  children: [
    {
      id: '',
      componentName: 'Col',
      componentType: 'layout',
      attrs: {
        span: 6,
        xs: 8,  //[!code ++]
        sm: 6,  //[!code ++]
        md: 4,  //[!code ++]
        lg: 3,  //[!code ++]
        xl: 1,  //[!code ++]
      },
      children: [],
      style: {},
    },
    {
      id: '',
      componentName: 'Col',
      componentType: 'layout',
      attrs: {
        span: 6,
      },
      children: [],
      style: {},
    }
  ],
  ...
}
```
