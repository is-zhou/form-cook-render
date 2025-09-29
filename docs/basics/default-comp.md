# 内置组件

## 注册使用

### 手动注册

```ts
import { defaultComponents, registerComponents } from "form-cook-render";
registerComponents(defaultComponents());
```

### 插件注册

```ts
import { createApp } from "vue";
import App from "./App.vue";
import formRender from "form-cook-render";

const app = createApp(App);

app.use(formRender);
app.mount("#app");
```

## 内置组件

| 组件名称         | 组件              | 说明       |
| ---------------- | ----------------- | ---------- |
| input            | `ElInput`         | 输入框     |
| textarea         | `ElInput`         | 文本域     |
| inputNumber      | `ElInputNumber`   | 数字输入框 |
| inputTag         | `ElInputTag`      | 标签输入框 |
| rate             | `ElRate`          | 评分       |
| radioGroup       | `ElRadioGroup`    | 单选组     |
| radioGroupButton | `ElRadioGroup`    | 单选按钮组 |
| radio            | `ElRadio`         | 单选       |
| radioButton      | `ElRadioButton`   | 单选按钮   |
| select           | `ElSelect`        | 下拉框     |
| switch           | `ElSwitch`        | 开关       |
| slider           | `ElSlider`        | 滑块       |
| colorPicker      | `ElColorPicker`   | 色盘       |
| option           | `ElOption`        | 选项       |
| selectV2         | `ElSelectV2`      | 下拉框     |
| datePicker       | `ElDatePicker`    | 日期       |
| timePicker       | `ElTimePicker`    | 时间       |
| formItem         | `ElFormItem`      | FormItem   |
| segmented        | `ElSegmented`     | 分段控制器 |
| checkboxGroup    | `ElCheckboxGroup` | 复选按钮组 |
| checkbox         | `ElCheckbox`      | 复选框     |
| row              | `ElRow`           | 分栏 Row   |
| col              | `ElCol`           | 分栏 Col   |
