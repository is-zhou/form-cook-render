<script setup lang="ts">
import { get, set, cloneDeep } from "lodash-es";
import { ElButton } from "element-plus";
import type { ComponentConfig } from "@/types/schema";
import {
  collectDefaultValues,
  normalizeStyle,
  replaceIndexInSchema,
} from "@/utils";
import FormNodes from "@/renderer/FormNodes.vue";
import defaultStyle from "./defaultStyle";

type Style = string | Record<string, string | number>;

interface Props {
  arrayKeyPath: string;
  children?: ComponentConfig[];
  max?: number;
  min?: number;
  limitButtonDisplay?: boolean;
  removeText?: string;
  addText?: string;
  isSetDefaultValue?: boolean;
  style_container?: Style;
  style_item_wrap?: Style;
  style_item_content?: Style;
  style_btnAdd_container?: Style;
  style_btnDel_container?: Style;
}

const formData = defineModel<Record<string, unknown>>("formData", {
  required: true,
});

let {
  arrayKeyPath,
  children,
  max = 1000,
  min = 0,
  limitButtonDisplay,
  removeText = "删除",
  addText = "新增",
  isSetDefaultValue = true,
  style_container,
  style_item_wrap,
  style_item_content,
  style_btnAdd_container,
  style_btnDel_container,
} = defineProps<Props>();

const defaultItem = collectDefaultValues(children);
let initList: Array<Record<string, unknown>> = get(
  formData.value,
  arrayKeyPath
) as Array<Record<string, unknown>>;
if (!initList || !Array.isArray(initList)) {
  initList = [isSetDefaultValue ? cloneDeep(defaultItem) : {}];
}
const list = ref(initList);
// 同步主表单数据
set(formData.value, arrayKeyPath, list.value);

const arrayContainerChildren = ref<Array<Array<ComponentConfig | string>>>([]);

watch(
  () => list.value,
  () => {
    arrayContainerChildren.value = list.value.map(
      (_: Record<string, unknown>, index: number) => {
        return children?.map((child) =>
          replaceIndexInSchema(cloneDeep(child), arrayKeyPath, index)
        );
      }
    ) as Array<Array<ComponentConfig | string>>;
  },
  { immediate: true, deep: true }
);
const addItem = () => {
  if (max && list.value.length >= max) return;
  list.value.push(isSetDefaultValue ? cloneDeep(defaultItem) : {});
  set(formData.value, arrayKeyPath, list.value);
};

const removeItem = (index: number) => {
  if (min && list.value.length <= min) return;
  list.value.splice(index, 1);
  set(formData.value, arrayKeyPath, list.value);
};

// 合并并转为字符串样式
const styles = computed(() => ({
  container: normalizeStyle(style_container, defaultStyle.style_container),
  itemWrap: normalizeStyle(style_item_wrap, defaultStyle.style_item_wrap),
  itemContent: normalizeStyle(
    style_item_content,
    defaultStyle.style_item_content
  ),
  btnAddContainer: normalizeStyle(
    style_btnAdd_container,
    defaultStyle.style_btnAdd_container
  ),
  btnDelContainer: normalizeStyle(
    style_btnDel_container,
    defaultStyle.style_btnDel_container
  ),
}));
</script>

<template>
  <div :style="styles.container">
    <template v-for="(list, index) in arrayContainerChildren" :key="index">
      <div data-style="itemWrap" :style="styles.itemWrap">
        <div
          data-style="itemContent"
          :style="styles.itemContent"
          class="array_container"
        >
          <slot>
            <FormNodes
              v-model:config-list="arrayContainerChildren[index]"
              v-model:form-data="formData"
            ></FormNodes>
          </slot>
        </div>
        <div :style="styles.btnDelContainer">
          <span
            @click="removeItem(index)"
            :style="{
              visibility: !(
                arrayContainerChildren.length === min && limitButtonDisplay
              )
                ? 'visible'
                : 'hidden',
            }"
          >
            <slot name="del">
              <el-button
                type="danger"
                :disabled="arrayContainerChildren.length === min"
              >
                {{ removeText }}
              </el-button>
            </slot>
          </span>
        </div>
      </div>
    </template>
    <div :style="styles.btnAddContainer">
      <span
        @click="addItem"
        :style="{
          visibility: !(
            arrayContainerChildren.length >= max && limitButtonDisplay
          )
            ? 'visible'
            : 'hidden',
        }"
      >
        <slot name="add">
          <el-button
            type="primary"
            :disabled="arrayContainerChildren.length >= max"
          >
            {{ addText }}
          </el-button>
        </slot>
      </span>
    </div>
  </div>
</template>

<style scoped></style>
