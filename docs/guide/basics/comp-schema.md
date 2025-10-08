# 表单配置协议

## Schema

```ts
interface formSchema {
  //表单域配置
  formAreaConfig: FormAreaConfig;
  //表单项/布局项配置数组
  formContentConfigList: ComponentConfig[];
}
```

## 表单域

```ts
interface FormAreaConfig {
  // 表单域默认创建按钮
  defaultCreateBtn?: string | boolean;
  // 表单域默认重置按钮
  defaultRestBtn?: string | boolean;
  // 表单域属性配置
  attrs: {
    //表单校验规则
    rules?: FormRules;
    //行内表单模式
    inline?: boolean;
    //禁用表单
    disabled?: boolean;
    //其他需要配置到el-form组件上的任何属性
    [key: string]: unknown;
  };
  //扩展配置
  [key: string]: unknown;
}
```

## 表单节点

- 组件类型

```ts
type ComponentConfig = FormCompConfig | LayoutCompConfig;
```

- 基础配置

```ts
interface BaseConfig {
  //唯一ID
  id: string;
  //组件名称
  componentName: ComponentName;
  //组件类型
  componentType: ComponentType;
  //排序
  sort?: number;
  //组件的内联样式
  style?: string | Record<string, unknown>;
  //组件插槽
  slots?: Slots;
  //组件发是否可见
  visible?: boolean | DynamicProp<boolean>;
  //组件事件配置
  events?: EventConfig[];
}
```

:::tip
组件名称 `componentName` 必须是内置已注册组件名称、不然会提示未注册组件
:::

## 表单组件

```ts
interface FormCompConfig extends BaseConfig {
  //表单组件
  componentType: "form";
  //字段、标签、规则等配置
  formItemAttrs: {
    //字典
    field: string;
    //标签
    label?: string;
    //必填配置
    required?: boolean;
    //其他扩展字段
    [key: string]: unknown;
  };
  //默认值
  defaultValue?: unknown;
  //组件属性
  attrs: Attrs & {
    //禁用配置
    disabled?: boolean | DynamicProp<boolean>;
    //只读配置
    readonly?: boolean | DynamicProp<boolean>;
    //字段校验规则配置
    rules?: FormRules;
  };
}
```

## 布局组件

```ts
export interface LayoutCompConfig extends BaseConfig {
  //布局组件
  componentType: "layout";
  //组件属性
  attrs: Attrs;
  //子组件
  children?: Array<ComponentConfig | string>;
}
```

## 组件属性

```ts
interface Attrs {
  //选项配置
  options?: OptionsConfig;
  //输入提示配置
  placeholder?: string;
  //根据配置的组件所需要的属性自行配置
  [key: string]: unknown;
}
```
