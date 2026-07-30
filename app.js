const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from my Express app!");
});

const unusedVar = 123;

module.exports = app;
