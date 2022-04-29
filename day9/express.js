const express = require("express");
const fs = require("fs");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (request, response) => {
  fs.readFile("user.json", (error, data) => {
    if (error) {
      throw error;
    } else {
      let data1 = JSON.parse(data);
      //   console.log(data1);
      data1.push(request.body);
      console.log(data1);

      fs.writeFile("user.json", JSON.stringify(data1), (error) => {
        if (error) {
          throw error;
        } else {
          console.log("successfuly");
        }
      });
    }
  });

  console.log("Got post request from client");
  response.send();
});

app.get("/users/:userId/books/:bookId", function (req, res) {
  fs.readFile("user.json", (err, data) => {
    console.log(data);
    if (err) {
      throw err;
    } else {
      const userId = JSON.parse(data);
      let filterId = userId.filter((e) => {
        if (e.id === Number(req.params.userId)) {
          return e;
        }
      });
      res.send(filterId);
      console.log(userId);
    }
  });
});

app.listen(3000);
