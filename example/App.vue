<script setup lang="ts">
import { ref } from "vue";
import { testSchema } from "./testSchema";

const formeSchema = ref(testSchema);
const formData = ref({});
</script>

<template>
  <FormRender v-model="formData" v-model:formSchema="formeSchema" />
</template>
