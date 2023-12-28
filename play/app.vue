<!--
 * @Descripttion: 
 * @Author: niezihao
 * @Date: 2023-12-05 11:12:34
 * @LastEditors: niezihao
 * @LastEditTime: 2023-12-28 16:21:29
-->
<!--
 * @Description: 
 * @Date: 2023-02-09 14:28:42
 * @Author: didi
 * @LastEditTime: 2023-12-06 17:43:14
-->
<template>
  <div>
    <ea-json v-model:data="data"></ea-json>
    <ea-button>按钮</ea-button>
    <Button>按钮</Button>
    <button>按钮</button>
    <Json v-model:data="data"></Json>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Button, Json } from '@earnie/components';
const data = ref({});
</script>
