// commonjs
// const http = require("http");

// // ecma script module (ES Module) (ESM)
// // import http from "http"

// http
//   .createServer((req, res) => {
//     res.end("Hello World");
//   })
//   .listen(3000);

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

app.listen(3000, () => {
  console.log("server running");
});
