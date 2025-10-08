# Schema 结构

## FormSchema

```ts
export interface FormSchema {
  formAreaConfig: FormAreaConfig;
  formContentConfigList: ComponentConfig[];
}
```

- `formAreaConfig`：表单整体配置
- `formContentConfigList`：表单项/布局项配置数组

## FormAreaConfig

```ts
interface FormAreaConfig {
  defaultCreateBtn?: string | boolean; // 默认创建按钮文本或关闭按钮
  defaultRestBtn?: string | boolean; // 默认重置按钮文本或关闭按钮
  attrs: {
    rules?: FormRules;
    inline?: boolean;
    size?: "" | "large" | "default" | "small";
    disabled?: boolean;
    labelPosition?: "left" | "right" | "top";
    labelWidth?: number | string;
    labelSuffix?: string;
    hideRequiredAsterisk?: boolean;
    requireAsteriskPosition?: "left" | "right";
    [key: string]: unknown;
  };
}
```

## ComponentConfig

```ts
type ComponentConfig = FormCompConfig | LayoutCompConfig;
```

### 表单组件 FormCompConfig

```ts
interface FormCompConfig {
  id: string;
  componentName: ComponentName; // 组件名
  componentType: "form";
  formItemAttrs: FormItem; // 表单项配置
  defaultValue?: unknown;
  attrs: Attrs & {
    disabled?: boolean | DynamicProp<boolean>;
    readonly?: boolean | DynamicProp<boolean>;
  };
  visible?: boolean | DynamicProp<boolean>;
  events?: EventConfig[];
}
```

### 布局组件 LayoutCompConfig

```ts
interface LayoutCompConfig {
  id: string;
  componentName: ComponentName;
  componentType: "layout";
  attrs: Attrs;
  children?: ComponentConfig[];
}
```

