<script lang="ts" setup>
import {
  getVisible,
  getDisabled,
  getReadonly,
} from "@/core/renderer/conditions";

import { ComponentConfig } from "../types/schema";
import { createVNodeRenderer } from "@/core/renderer";

type FormData = Record<string, unknown>;

const configList = defineModel<ComponentConfig[]>("configList", {
  required: true,
});

const formData = defineModel<FormData>("formData", {
  required: true,
  default: () => ({}),
});

const { renderNode } = createVNodeRenderer(formData);
</script>
<template>
  <template v-for="config in configList">
    <template v-if="config.componentType === 'form'">
      <el-form-item
        v-if="getVisible(config, formData)"
        v-bind="config.formItemAttrs"
        :prop="config.formItemAttrs.field"
      >
        <component
          :is="renderNode(config)"
          :key="config.id"
          :disabled="getDisabled(config, formData)"
          :readonly="getReadonly(config, formData)"
        />
      </el-form-item>
    </template>
    <template v-else>
      <el-form-item
        v-if="config.componentName === 'FormItem'"
        v-bind="config.attrs"
      >
        <template v-if="config.children">
          <FormNodes
            v-model:config-list="config.children"
            v-model:form-data="formData"
          ></FormNodes>
        </template>
      </el-form-item>
      <component
        v-else-if="config.children?.length"
        :is="renderNode(config)"
        :key="config.id"
      >
        <FormNodes
          v-model:config-list="config.children"
          v-model:form-data="formData"
        ></FormNodes>
      </component>
      <component v-else-if="config.slots" :is="renderNode(config)"> </component>
    </template>
  </template>
</template>
