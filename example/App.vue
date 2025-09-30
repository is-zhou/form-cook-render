<script setup lang="ts">
import { ref } from "vue";
import type { FormSchema } from "../src/index";
import { Calendar, Search } from "@element-plus/icons-vue";
const formeSchema = ref<FormSchema>({
  formAreaConfig: {
    attrs: {
      "label-width": "auto",
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
        count: [
          {
            required: true,
            message: "Please select Activity count",
            trigger: "change",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change",
          },
        ],
        location: [
          {
            required: true,
            message: "Please select a location",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur",
          },
        ],
      },
    },
  },
  formContentConfigList: [
    {
      id: "",
      componentName: "slider",
      componentType: "form",
      formItemAttrs: {
        field: "",
        label: "滑块",
      },
      attrs: {},
      defaultValue: 0,
    },
    // {
    //   id: "1",
    //   componentName: "input",
    //   componentType: "form",
    //   formItemAttrs: { field: "activity.name", label: "名称" },
    //   attrs: {
    //     placeholder: "请输入名称",
    //     disabled(params) {
    //       return params.formData.region === "shanghai";
    //     },
    //   },
    //   defaultValue: "齐天大圣",
    //   visible(params) {
    //     return params.formData.region === "beijing";
    //   },
    // },
    // {
    //   id: "2",
    //   componentName: "select",
    //   componentType: "form",
    //   formItemAttrs: { field: "region", label: "Activity region" },
    //   slots: {
    //     default: {
    //       componentName: "option",
    //       options: [
    //         {
    //           label: "shanghai",
    //           value: "shanghai",
    //         },
    //         {
    //           label: "beijing",
    //           value: "beijing",
    //         },
    //       ],
    //     },
    //   },
    //   attrs: {
    //     placeholder: "Activity region",
    //     disabled(params) {},
    //   },
    //   defaultValue: "shanghai",
    //   visible(params) {
    //     return params.formData.count === "1";
    //   },
    // },
    // {
    //   id: "3",
    //   componentName: "selectV2",
    //   componentType: "form",
    //   formItemAttrs: { field: "count", label: "Activity count" },
    //   attrs: {
    //     placeholder: "Activity count",
    //     options: (params) =>
    //       new Promise((res) => {
    //         setTimeout(() => {
    //           res([
    //             [
    //               {
    //                 label: "1",
    //                 value: "1",
    //               },
    //               {
    //                 label: "2",
    //                 value: "2",
    //               },
    //             ],
    //             ["activity.name"],
    //           ]);

    //           if (
    //             params.formData.region === "beijing" &&
    //             params.schemaItem.componentType === "form"
    //           ) {
    //             params.schemaItem.formItemAttrs.label = "6666";
    //           }
    //           console.log("获得了结果");
    //         }, 1000);
    //       }),
    //     disabled(params) {},
    //   },
    //   defaultValue: "2",
    // },
    // {
    //   id: "4",
    //   componentName: "formItem",
    //   componentType: "layout",
    //   attrs: {
    //     label: "Activity time",
    //     required: true,
    //   },
    //   children: [
    //     {
    //       id: "",
    //       componentName: "datePicker",
    //       componentType: "form",
    //       formItemAttrs: { field: "date1" },
    //       attrs: {
    //         placeholder: "Pick a date",
    //       },
    //       defaultValue: "",
    //     },
    //     {
    //       id: "",
    //       componentName: "timePicker",
    //       componentType: "form",
    //       formItemAttrs: { field: "date2" },
    //       attrs: {
    //         placeholder: "Pick a time",
    //       },
    //       defaultValue: "",
    //     },
    //   ],
    // },
    // {
    //   id: "5",
    //   componentName: "switch",
    //   componentType: "form",
    //   formItemAttrs: { field: "delivery", label: "Instant delivery" },
    //   attrs: {
    //     disabled(params) {
    //       return params.formData.region === "shanghai";
    //     },
    //   },
    //   defaultValue: true,
    // },
    // {
    //   id: "6",
    //   componentName: "segmented",
    //   componentType: "form",
    //   formItemAttrs: { field: "location", label: "Activity location" },
    //   attrs: {
    //     options: ["Home", "Company", "School"],
    //     disabled(params) {},
    //   },
    //   defaultValue: "School",
    // },
    // {
    //   id: "7",
    //   componentName: "checkboxGroup",
    //   componentType: "form",
    //   formItemAttrs: { field: "type", label: "Activity type" },
    //   attrs: {
    //     disabled(params) {},
    //   },
    //   slots: {
    //     default: {
    //       componentName: "checkbox",
    //       options: () =>
    //         new Promise((res) => {
    //           setTimeout(() => {
    //             res([
    //               [
    //                 {
    //                   value: "Promotion activities",
    //                   name: "type",
    //                   label: "Promotion activities",
    //                 },
    //                 {
    //                   value: "Offline activities",
    //                   name: "type",
    //                   label: "Offline activities",
    //                 },
    //               ],
    //               [],
    //             ]);
    //             console.log("获得了结果66666");
    //           }, 2000);
    //         }),
    //     },
    //   },
    //   defaultValue: [],
    // },
    // {
    //   id: "8",
    //   componentName: "radioGroup",
    //   componentType: "form",
    //   formItemAttrs: { field: "resource", label: "Resources" },
    //   attrs: {
    //     disabled(params) {},
    //   },
    //   slots: {
    //     default: {
    //       componentName: "radio",
    //       options: [
    //         {
    //           value: "Sponsorship",
    //           label: "Sponsorship",
    //         },
    //         {
    //           value: "Venue",
    //           label: "Venue",
    //         },
    //       ],
    //     },
    //   },
    //   defaultValue: "",
    // },
    // {
    //   id: "9",
    //   componentName: "input",
    //   componentType: "form",
    //   formItemAttrs: { field: "desc", label: "Activity form" },
    //   attrs: {
    //     type: "textarea",
    //     placeholder: "Activity form",
    //     disabled(params) {},
    //     readonly(params) {
    //       return params.formData.region === "shanghai";
    //     },
    //   },
    //   defaultValue: "",
    // },
  ],
});
const formData = ref({});

const reset = () => {};
const submit = () => {};

const renderRef = ref();

function submitForm() {
  renderRef.value?.submit();
}

function restForm() {
  renderRef.value?.resetFields();
}

function validateForm() {
  renderRef.value?.validate();
}
</script>

<template>
  <form-cook-render
    v-model="formData"
    @reset="reset"
    @submit="submit"
    ref="renderRef"
    v-model:formSchema="formeSchema"
  />

  <el-button :type="'primary'" @click="submitForm()"> 创建 </el-button>
  <el-button :type="'primary'" @click="restForm()"> 重置 </el-button>
  <el-button :type="'primary'" @click="validateForm()"> 校验 </el-button>
</template>
