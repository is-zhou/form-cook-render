# 布局组件 LayoutCompConfig

## 基础配置

| 字段             | 值/类型                          | 说明                                                       |
| ---------------- | -------------------------------- | ---------------------------------------------------------- |
| id               | `string`                         | 唯一 ID                                                    |
| componentName    | `ComponentName`                  | 组件名称（必须是内置已注册组件名称、不然会提示未注册组件） |
| componentType    | `ComponentType`                  | 表单类型或者容器型 `form` `layout`                         |
| visible （可选） | `boolean` `DynamicProp<boolean>` | 表单项渲染时时候可见                                       |
| slots （可选）   | `Slots`                          | 表单组件插槽                                               |
| events （可选）  | `EventConfig[]`                  | 事件配置                                                   |

## 子组件配置

| 字段             | 值/类型                             | 说明       |
| ---------------- | ----------------------------------- | ---------- |
| children（可选） | `LayoutCompConfig` `FormCompConfig` | 配置子组件 |

## 布局组件配置 attrs

| 字段             | 值/类型                          | 说明     |
| ---------------- | -------------------------------- | -------- |
| disabled（可选） | `boolean` `DynamicProp<boolean>` | 是否禁用 |
| readonly（可选） | `boolean` `DynamicProp<boolean>` | 是否只读 |

- 根据组件名称对应的组件，配置相应的 Attributes
