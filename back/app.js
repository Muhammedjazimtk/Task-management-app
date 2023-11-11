const express = require("express");
const mongoose = require("mogoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/signUP", (req, res) => {
  res.send("heo");
});

app.post("/signUP", (req, res) => {
  res.send("hellooo");
});

app.listen(3000, (req, res) => {
  console.log("app is listening to port 3000");
});
