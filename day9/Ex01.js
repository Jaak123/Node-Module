const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello your_name");
});

app.listen(3000);
