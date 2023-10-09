<script setup>
import {ref} from "vue";
import request from "./utils/request.js";

const name = ref("");
const age = ref("");

const login = async () => {
  const res = await request("post", "/login");
  console.log(res);
};
</script>

<template>
  <h1>这是个测试，发起post请求，拿到node返回的数据。</h1>

  <input type="text" name="name" />
  <input type="text" name="age" />
  <input type="submit" value="提交" @click="login()" />

  <div>{{ res }}</div>
</template>

<style scoped></style>
