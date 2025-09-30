# 表单组件 FormCompConfig

## 基础配置

| 字段             | 值/类型                          | 说明                                                       |
| ---------------- | -------------------------------- | ---------------------------------------------------------- |
| id               | `string`                         | 唯一 ID                                                    |
| componentName    | `ComponentName`                  | 组件名称（必须是内置已注册组件名称、不然会提示未注册组件） |
| componentType    | `ComponentType`                  | 表单类型或者容器型 `form` `layout`                         |
| visible （可选） | `boolean` `DynamicProp<boolean>` | 表单项渲染时时候可见                                       |
| slots （可选）   | `Slots`                          | 表单组件插槽                                               |
| events （可选）  | `EventConfig[]`                  | 事件配置                                                   |

## 表单默认值

| 字段                 | 值/类型   | 说明   |
| -------------------- | --------- | ------ |
| defaultValue（可选） | `unknown` | 默认值 |

## 表单项配置 formItemAttrs

| 字段  | 值/类型     | 说明                                    |
| ----- | ----------- | --------------------------------------- |
| field | `string`    | 字段（该字段同步配置 FormItem 的 prop） |
| label | `string`    | 标签文本                                |
| rules | `FormRules` | 校验规则                                |

注意：其他配置项同步 el-form-item 的属性配置

## 表单组件配置 attrs

| 字段             | 值/类型                          | 说明     |
| ---------------- | -------------------------------- | -------- |
| disabled（可选） | `boolean` `DynamicProp<boolean>` | 是否禁用 |
| readonly（可选） | `boolean` `DynamicProp<boolean>` | 是否只读 |

- 根据组件名称对应的组件，配置相应的 Attributes
