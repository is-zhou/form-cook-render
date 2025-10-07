# 快速开始

## 安装

::: code-group

```sh [npm]
$ npm add form-cook-render
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
import FormCookRender from "form-cook-render";

const app = createApp(App);

app.use(FormCookRender);

app.mount("#app");
```

## 局部注册

```vue
<script setup lang="ts">
import { FormCookRender, registerDefaultComps } from "form-cook-render";
registerDefaultComps();
</script>
```
