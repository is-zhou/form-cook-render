
import type { FormRules } from "element-plus";
import { ElementPlusComponentName } from "../core/defaultRegistry";


type TComponentType = 'form' | 'layout'

type TFormItem = { field: string; label?: string; required?: boolean;[key: string]: any }

type TSlot = { name: string, componentName: TComponentName, options?: { label?: string, value?: unknown, name?: string }[], [key: string]: unknown }

export type TComponentName = ElementPlusComponentName

export type TConfig<T extends TComponentType> = T extends 'form'
  ? {
    id: string
    componentName: TComponentName
    componentType: T
    formItemAttrs: TFormItem
    attrs: { [key: string]: unknown }
    defaultValue: unknown
    sort?: number
    style?: {}
    slots?: TSlot[]
  }
  : {
    id: string
    sort?: number
    componentName: TComponentName
    componentType: T
    attrs: { [key: string]: unknown }
    style?: {}
    slots?: TSlot[]
    children?: TComponentConfig[]
  }

export type TComponentConfig = TConfig<'form'> | TConfig<'layout'>

export type TFormAreaConfig = {
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


export type TFormSchema = {
  formAreaConfig: TFormAreaConfig
  formContentConfigList: TComponentConfig[]
}


