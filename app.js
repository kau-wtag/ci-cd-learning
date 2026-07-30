const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from my Express app!");
});

module.exports = app;
