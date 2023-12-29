<!--
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-12-15 09:36:47
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-28 17:31:34
-->
<template>
  <json-edit v-bind="$attrs" :data="model" @change="change"></json-edit>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from "vue";
import jsonEdit from "./JsonEdit.vue";
defineOptions({ name: "ea-json" });
const emit = defineEmits(["update:data"]);
const props = defineProps({
  data: {
    // 传入的json数据
    type: [Object, Array],
    required: true,
  },
});
let model = computed({
  get() {
    return props.data;
  },
  set(value) {
    emit("update:data", value);
  },
});
function change(value: any) {
  emit("update:data", value);
}
</script>
