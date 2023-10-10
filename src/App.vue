<script setup>
import { ref } from "vue";
import request from "./utils/request.js";

const content = ref("");
const id = ref("");

// 查询
const search = async () => {
  const res = await request("get", "/get-data");
  console.log(res);
};

// 新增
const add = async () => {
  const data = {
    content: content.value,
  };
  const res = await request("post", "/insert-data", data);
  console.log(res);
};

// 修改
const update = async () => {
  const data = {
    id: id.value,
    content: content.value,
  };
  const res = await request("put", "/update-data", data);
  console.log(res);
};

// 删除
const deleted = async () => {
  const data = {
    id: id.value,
  };
  const res = await request("put", "/delete-data", data);
  console.log(res);
};
</script>

<template>
  <h1>这是个测试，发起post请求，拿到node返回的数据。</h1>

  content: <input type="text" name="content" v-model="content" /> id:
  <input type="text" name="id" v-model="id" />
  <input type="submit" value="查询" @click="search()" />
  <input type="submit" value="新增" @click="add()" />
  <input type="submit" value="修改" @click="update()" />
  <input type="submit" value="删除" @click="deleted()" />

  <div style="height: 100px">{{ res }}</div>
</template>

<style scoped></style>
