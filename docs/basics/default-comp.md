# 内置组件

## 注册使用

### 手动注册

```ts
import { registerDefaultComps } from "form-cook-render";
registerDefaultComps();
```

### 插件注册

```ts
import { createApp } from "vue";
import App from "./App.vue";
import FormCookRender from "form-cook-render";

const app = createApp(App);

app.use(FormCookRender);
app.mount("#app");
```

:::tip
外部组件注册时，组件名称请以大写字母开头,小写字母开头将默认为原生 html 标签,原生标签无需注册！
:::

## 内置组件

| 组件名称         | 组件              | 说明       |
| ---------------- | ----------------- | ---------- |
| Input            | `ElInput`         | 输入框     |
| Textarea         | `ElInput`         | 文本域     |
| InputNumber      | `ElInputNumber`   | 数字输入框 |
| InputTag         | `ElInputTag`      | 标签输入框 |
| Rate             | `ElRate`          | 评分       |
| RadioGroup       | `ElRadioGroup`    | 单选组     |
| RadioGroupButton | `ElRadioGroup`    | 单选按钮组 |
| Radio            | `ElRadio`         | 单选       |
| RadioButton      | `ElRadioButton`   | 单选按钮   |
| Select           | `ElSelect`        | 下拉框     |
| Switch           | `ElSwitch`        | 开关       |
| Slider           | `ElSlider`        | 滑块       |
| ColorPicker      | `ElColorPicker`   | 色盘       |
| Option           | `ElOption`        | 选项       |
| SelectV2         | `ElSelectV2`      | 下拉框     |
| DatePicker       | `ElDatePicker`    | 日期       |
| TimePicker       | `ElTimePicker`    | 时间       |
| FormItem         | `ElFormItem`      | FormItem   |
| Segmented        | `ElSegmented`     | 分段控制器 |
| CheckboxGroup    | `ElCheckboxGroup` | 复选按钮组 |
| Checkbox         | `ElCheckbox`      | 复选框     |
| Row              | `ElRow`           | 分栏 Row   |
| Col              | `ElCol`           | 分栏 Col   |
| Cascader         | `ElCascader`      | 级联选择器 |
| Mention          | `ElMention`       | 提及       |
| Transfer         | `ElTransfer`      | 穿梭框     |
| TreeSelect       | `ElTreeSelect`    | 树形选择   |
| Upload           | `ElUpload`        | 上传       |
| Button           | `ElButton`        | 按钮       |
