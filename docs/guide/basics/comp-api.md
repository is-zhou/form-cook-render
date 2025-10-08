# form-cook-render API

## Attributes

| 属性名              |       说明       |         类型          | 默认值 |
| ------------------- | :--------------: | :-------------------: | -----: |
| v-model             |   表单数据对象   | `Record<string, any>` |        |
| v-model:form-schema | 动态表单渲染协议 |     `FormSchema`      |        |

```vue
<script lang="ts" setup>
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";
const formData = ref({});
const formSchema: FormSchema = {};
</script>

<template>
  <form-cook-render v-model="formData" v-model:form-schema="formSchema" />
</template>
```

## Events

| 名称   |             说明              |             类型             | 默认值 |
| ------ | :---------------------------: | :--------------------------: | -----: |
| submit | 表单提交时触发，返回 formData | `(formData: FormData)=>void` |        |
| reset  |        表单重置时触发         |          `()=>void`          |        |

```vue{12,13}
<script lang="ts" setup>
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";
const formData = ref({});
const formSchema: FormSchema = {};
</script>

<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  />
</template>
```

## Slots

| 插槽名  |      说明      |            子标签            |
| ------- | :------------: | :--------------------------: |
| default | 自定义默认内容 | `(formData: FormData)=>void` |

```vue{14}
<script lang="ts" setup>
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";
const formData = ref({});
const formSchema: FormSchema = {};
</script>
<template>
  <form-cook-render
    v-model="formData"
    v-model:form-schema="formSchema"
    @submit="(data) => console.log('提交数据:', data)"
    @reset="console.log('表单已重置')"
  >
  <div>自定义插槽内容</div>
  </form-cook-render>
</template>
```

## Exposes

| 名称        |           说明           |                   类型                    |
| ----------- | :----------------------: | :---------------------------------------: |
| validate    | 对整个表单的内容进行验证 | `Promise<boolean>或者 Promise<undefined>` |
| submit      |         表单提交         |    `Promise<Record<string, unknown>>`     |
| resetFields |         表单重置         |               `() => void`                |

用法：

```vue{7-9,14}
<script lang="ts" setup>
import { ref } from "vue";
import type { FormSchema } from "form-cook-render";
const formRef = ref<FormCookRenderExpose>();
const formSchema: FormSchema = {};

await formRef.value?.validate();
await formRef.value?.submit();
formRef.value?.resetFields();

</script>
<template>
  <form-cook-render
    ref="formRef"
    v-model="formData"
    v-model:form-schema="formSchema"
  />
</template>
```
