
import type { FormRules } from "element-plus";


type ComponentType = 'form' | 'layout'

export interface ComponentNameMap {
  input: unknown,
  textarea: unknown,
  inputNumber: unknown,
  inputTag: unknown,
  rate: unknown,
  radioGroup: unknown,
  radioGroupButton: unknown,
  radio: unknown,
  radioButton: unknown,
  select: unknown,
  switch: unknown,
  slider: unknown,
  colorPicker: unknown,
  option: unknown,
  selectV2: unknown,
  datePicker: unknown,
  timePicker: unknown,
  formItem: unknown,
  segmented: unknown,
  checkboxGroup: unknown,
  checkbox: unknown,
  row: unknown,
  col: unknown,
  cascader: unknown,
  span?: unknown,
  mention?: unknown,
  transfer: unknown,
  treeSelect: unknown,
  upload: unknown,
  button: unknown,
}

export type ComponentName = keyof ComponentNameMap

/*  
外部扩展ComponentName类型：
  外部项目通过声明declare module 方式扩展ComponentName，因为ComponentName是keyof ComponentNameMap所得，所以外部声明扩展 ComponentNameMap即可
  (注意:ComponentNameMap必须为interface且在库的入口中被导出)
  
在使用方（比如 src/main.ts 或某个 .d.ts 文件里）如下声明
import 'form-cook-render'
// 扩展内置接口
declare module 'form-cook-render' {
  export interface ComponentNameMap {
     customInput: unknown
   }
 } 
*/

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
  handlerType: 'fn' | 'globalFn'
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
  visible?: boolean | DynamicProp<boolean>
  events?: EventConfig[]
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
  children?: ComponentConfig[];
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


