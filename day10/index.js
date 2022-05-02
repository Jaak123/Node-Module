const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/static", express.static("public"));

app.get("/", function (req, res) {
  res.send("heello");
});
app
  .route("/book")
  .get(function (req, res) {
    fs.readFile("library.json", (error, data) => {
      if (error) {
        error;
      } else {
        res.send(data);
        console.log(data);
      }
    });
    res.send("Get a random ");
  })
  .post(function (req, res) {
    res.send("Add a book");
  })
  .put(function (req, res) {
    res.send("update the book");
  });

// app.get("/library", function (req, res) {
//   console.log(req.queryparams);
//   console.log(req.params);
//   fs.readFile("library.json", (error, data) => {
//     if (error) {
//       error;
//     } else {
//       res.send(data);
//       console.log(data);
//     }
//   });
//   //   res.send("it is library path");
// });
app.listen(3000);
