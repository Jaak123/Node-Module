const express = require("express");
const fs = require("fs");
const app = express();

app.get("/get-data", function (req, res) {
  let stream = fs.createReadStream("./data/data.csv");
  stream.on("open", function () {
    stream.pipe(res);
  });
});

app.listen(3000);
