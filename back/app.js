const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const encrypt = require("mongoose-encryption");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const app = express();

mongoose.connect("mongodb://localhost:27017/todoDB");

const todoSchema = new mongoose.Schema({
  item: String,
  name: String,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
userSchema.plugin(encrypt, { secret: secret, encryptedFields: ["password"] });

const User = new mongoose.model("User", userSchema);

const secret = "thisisalongsecret";

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
