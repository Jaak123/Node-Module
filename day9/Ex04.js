const express = require("express");
const fs = require("fs");
const app = express();

app.get("/get-data", function (req, res) {
  fs.readFile("./data/data.csv", "utf8", (error, data) => {
    console.log(data);
    if (error) throw error;
    let data2 = data.split(/\r?\n/);
    console.log(data2);
    res.send(data2);
  });
});

app.listen(3001);
