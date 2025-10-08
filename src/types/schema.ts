
import type { FormRules } from "element-plus";


type ComponentType = 'form' | 'layout'

export interface ComponentNameMap {
  Input: unknown;
  Textarea: unknown;
  InputNumber: unknown;
  InputTag: unknown;
  Rate: unknown;
  RadioGroup: unknown;
  RadioGroupButton: unknown;
  Radio: unknown;
  RadioButton: unknown;
  Select: unknown;
  Switch: unknown;
  Slider: unknown;
  ColorPicker: unknown;
  Option: unknown;
  SelectV2: unknown;
  DatePicker: unknown;
  TimePicker: unknown;
  FormItem: unknown;
  Segmented: unknown;
  CheckboxGroup: unknown;
  Checkbox: unknown;
  Row: unknown;
  Col: unknown;
  Cascader: unknown;
  Mention: unknown;
  Transfer: unknown;
  TreeSelect: unknown;
  Upload: unknown;
  Button: unknown;
}
//string & {} 代表“任意字符串但不是字面量类型的泛型字符串”
// type MyType = "foo" | "bar" | string
// ❌ 这样写其实等价于 string，TS 不会再提示 "foo" "bar"。
// 所以必须用 string & {} 的写法来保留字面量提示。
type EnumLike<T extends string> = T | (string & {});
export type ComponentName = EnumLike<keyof ComponentNameMap>

type DynamicProp<T> = (params: {
  formData: Record<string, any>
  schemaItem: ComponentConfig
}) => T | void

type DynamicPropOption<T> = (params: {
  formData: Record<string, any>
  schemaItem: ComponentConfig
}) => [T, string[]] | Promise<[T, string[]]> | void

type remoteType = {
  url: string
  method?: 'GET' | 'POST'
  map: (res: { data: any }, params: {
    formData: Record<string, any>
    schemaItem: ComponentConfig
  }) => [Array<Option>, string[]]
}
type staticType = Option[]
type functionType = DynamicPropOption<Option[]>

export type Option = {
  label: string
  value: string | number
  disabled?: boolean
  children?: Option[]
  [key: string]: unknown
} | string | number

export type OptionsConfig = staticType | functionType | remoteType

export interface FormItem {
  field: string;
  label?: string;
  required?: boolean;
  [key: string]: any
}

export interface Slot {
  componentName: ComponentName;
  options?: OptionsConfig;
  text?: string;
  attrs?: Attrs;
  [key: string]: unknown
}

export interface Attrs {
  options?: OptionsConfig;
  data?: OptionsConfig;
  clearable?: boolean;
  precision?: number;
  max?: number;
  placeholder?: string;
  autosize?: boolean | { minRows?: number; maxRows?: number };
  serializeType?: string | string[]
  [key: string]: unknown
}

export interface Slots {
  [key: string]: Slot | string
}

type eventName = 'click' | 'change' | 'input' | 'focus' | 'blur'
export interface EventConfig {
  eventName: eventName | string
  handlerType: 'fn' | 'builtinFn'
  fn?: (formData: Record<string, unknown>) => unknown
  fnName?: string
}

export interface BaseConfig {
  id: string;
  componentName: ComponentName;
  componentType: ComponentType;
  sort?: number;
  style?: Record<string, unknown>;
  slots?: Slots;
  _slots?: { [key: string]: () => (Array<unknown> | string) };
  visible?: boolean | DynamicProp<boolean>;
  events?: EventConfig[];
}

export interface FormCompConfig extends BaseConfig {
  componentType: "form";
  formItemAttrs: FormItem;
  defaultValue?: unknown;
  attrs: Attrs & {
    disabled?: boolean | DynamicProp<boolean>
    readonly?: boolean | DynamicProp<boolean>
    rules?: FormRules
  };
}

export interface LayoutCompConfig extends BaseConfig {
  componentType: "layout";
  attrs: Attrs;
  children?: Array<ComponentConfig | string>;
}

export type ComponentConfig = FormCompConfig | LayoutCompConfig;

export interface FormAreaConfig {
  defaultCreateBtn?: string | boolean;
  defaultRestBtn?: string | boolean;
  attrs: {
    rules?: FormRules
    inline?: boolean
    size?: '' | 'large' | 'default' | 'small'
    disabled?: boolean
    'label-position'?: 'left' | 'right' | 'top'
    'label-width'?: number | string
    'label-suffix'?: string
    'hide-required-asterisk'?: boolean
    'require-asterisk-position'?: 'left' | 'right'
    [key: string]: unknown
  }
  [key: string]: unknown
}

export interface FormSchema {
  formAreaConfig: FormAreaConfig
  formContentConfigList: ComponentConfig[]
}


