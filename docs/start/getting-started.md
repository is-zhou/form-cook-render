# 快速开始

## 安装

::: code-group

```sh [npm]
$ npm add -D form-cook-render
```

```sh [pnpm]
$ pnpm add form-cook-render
```

```sh [yarn]
$ yarn add form-cook-render
```

```sh [bun]
$ bun add form-cook-render
```

:::

## 全局注册

```ts
import { createApp } from "vue";
import App from "./App.vue";
import formRender from "form-cook-render";

const app = createApp(App);

app.use(formRender, {
  components: {
    //可在此处扩展外部组件（自定义组件）
  },
});

app.mount("#app");
```

## 局部注册

```vue
<script setup lang="ts">
import FormCookRender, {
  defaultComponents,
  registerComponents,
} from "form-cook-render";
import type { FormSchema } from "form-cook-render";
registerComponents(defaultComponents());
</script>
```
