<template>
  <div id="app">
    <div>
      <el-button type="primary" @click="count++">点击+1</el-button>
      <el-button type="default" @click="count--">点击-1</el-button>
    </div>
    <h1 style="text-align: center;">{{ count }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<style>
#app {
  width: 170px;
  padding: 5px;
}
</style>
