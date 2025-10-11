# 添加/删除表单项

通过内置组件 `ArrayContainer` 来快速实现动态的添加删除表单项
:::tip
组件必须配置 `arrayKeyPath` 字段，该字段是 formData 到动态数组的路径，配置该字段后 `ArrayContainer` 组件的子组件为表单的字段直接配置为数组项的字段即可，组件会自动生成数组关系。
:::

## 基础用法

<demo vue="add-del/Base.vue"></demo>

## 进阶用法

<demo vue="add-del/AddDel.vue"></demo>

## 组件属性

| 属性名                 |                说明                |               类型                | 默认值 |
| ---------------------- | :--------------------------------: | :-------------------------------: | -----: |
| arrayKeyPath           |              数组路径              |             `string`              |        |
| children               |     子项渲染协议数组（子组件）     |        `ComponentConfig[]`        |        |
| max                    |           最大表单项数量           |             `number`              |   1000 |
| min                    |           最小表单项数量           |             `number`              |      0 |
| limitButtonDisplay     | 达到最大或最小表单数量时不显示按钮 |             `boolean`             |        |
| removeText             |         自定义删除按钮文本         |             `string`              |        |
| addText                |         自定义新增按钮文本         |             `string`              |        |
| isSetDefaultValue      |       新增时是否初始化默认值       |             `boolean`             |        |
| style_container        |        自定义最外层容器样式        | `string` `Record<string, string>` |        |
| style_item_wrap        |          自定义项容器样式          | `string` `Record<string, string>` |        |
| style_item_content     |        自定义动态项容器样式        | `string` `Record<string, string>` |        |
| style_btnAdd_container |       自定义新增按钮容器样式       | `string` `Record<string, string>` |        |
| style_btnDel_container |       自定义删除按钮容器样式       | `string` `Record<string, string>` |        |
