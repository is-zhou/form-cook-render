<script lang="ts" setup>
import {
  getVisible,
  getDisabled,
  getReadonly,
  getSize,
} from "@/core/renderer/conditions";

import { ComponentConfig } from "../types/schema";
import { createVNodeRenderer } from "@/core/renderer";

type FormData = Record<string, unknown>;

const { areaAttrs } = defineProps<{
  areaAttrs?: { size: string | undefined; disabled: boolean | undefined };
}>();

const configList = defineModel<Array<ComponentConfig | string>>("configList", {
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
    <template v-if="typeof config === 'string'">
      {{ config }}
    </template>
    <template v-else-if="config.componentType === 'form'">
      <el-form-item
        v-if="getVisible(config, formData)"
        v-bind="config.formItemAttrs"
        :prop="config.formItemAttrs.field"
      >
        <component
          :is="renderNode(config)"
          :key="config.id"
          :disabled="getDisabled(config, formData, areaAttrs?.disabled)"
          :readonly="getReadonly(config, formData)"
          :size="getSize(config, areaAttrs?.size)"
        />
      </el-form-item>
    </template>
    <template v-else-if="config.componentType === 'layout'">
      <el-form-item
        v-if="config.componentName === 'FormItem'"
        v-bind="config.attrs"
      >
        <template v-if="config.children">
          <FormNodes
            v-model:config-list="config.children"
            v-model:form-data="formData"
            :areaAttrs="areaAttrs"
          ></FormNodes>
        </template>
      </el-form-item>
      <component
        v-else-if="config.componentName === 'ArrayContainer'"
        :is="renderNode(config)"
      >
      </component>
      <component
        v-else-if="config.children?.length"
        :is="renderNode(config)"
        :key="config.id"
      >
        <FormNodes
          v-model:config-list="config.children"
          v-model:form-data="formData"
          :areaAttrs="areaAttrs"
        ></FormNodes>
      </component>
      <component v-else-if="config.slots" :is="renderNode(config)"> </component>
    </template>
  </template>
</template>
