# 拓展自定义组件

## 手动注册

```ts:line-numbers {}
import { registerComponents } from "form-cook-render";
import { SerializeInput } from 'vue-serialize-input'
registerComponents({
  serializeInput: SerializeInput, //注册想要使用的组件
});
```

## 插件注册

```ts:line-numbers {}
import { createApp } from "vue";
import App from "./App.vue";
import formRender from "form-cook-render";
import { SerializeInput } from 'vue-serialize-input'

const app = createApp(App);

app.use(formRender, {
  components: {
    serializeInput: SerializeInput,  //注册想要使用的组件
  },
});
app.mount("#app");
```

## 外部注册主键类型拓展

```ts
//form-render.d.ts

import "form-cook-render";

// 使用 declare module 关键字来“打开”这个模块
declare module "form-cook-render" {
  // 重新声明同名的 interface ComponentNameMap
  // TypeScript 会自动将这里的声明和库里原始的声明进行“合并”
  export interface ComponentNameMap {
    // 在这里添加你想要扩展的组件名
    // 属性值设为 unknown 即可，与原始定义保持一致
    serializeInput: unknown;
  }
}
```
