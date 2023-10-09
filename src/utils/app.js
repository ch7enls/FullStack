const http = require("http");
const express = require("express");
const cors = require('cors');
const app = express();

// 允许所有来源访问（在生产环境中，最好设置为具体的前端域名）
app.use(cors());

app.get("/", (req, res) => {
  res.send("你是？");
});

// 用post返回一段json
app.post("/login", (req, res) => {
  res.send({
    name: "张三",
    age: 18,
  });
});

const server = app.listen(8080, () => {
  console.log("server is running");
});
