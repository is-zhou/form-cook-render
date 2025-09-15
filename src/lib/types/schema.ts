
import type { FormRules } from "element-plus";


type ComponentType = 'form' | 'layout'

export interface ComponentNameMap {
  input: unknown,
  textarea: unknown,
  inputNumber: unknown,
  inputTag: unknown,
  rate: unknown,
  radioGroup: unknown,
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



interface FormItem { field: string; label?: string; required?: boolean;[key: string]: any }

interface Slot { name: string, componentName: ComponentName, options?: { label?: string, value?: unknown, name?: string }[], [key: string]: unknown }

interface BaseConfig {
  id: string;
  componentName: ComponentName;
  componentType: ComponentType;
  sort?: number;
  attrs: Record<string, unknown>;
  style?: Record<string, unknown>;
  slots?: Slot[];
}

export interface FormCompConfig extends BaseConfig {
  componentType: "form";
  formItemAttrs: FormItem;
  defaultValue: unknown;
}

export interface LayoutCompConfig extends BaseConfig {
  componentType: "layout";
  children?: ComponentConfig[];
}

export type ComponentConfig = FormCompConfig | LayoutCompConfig;

export interface FormAreaConfig {
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


