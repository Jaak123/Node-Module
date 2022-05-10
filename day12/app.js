const express = require("express");
const app = express();
app.get(
  "/user/:id",
  function (req, res, next) {
    const user_id = req.params.id;
    if (user_id > 2006) next("route");
    if (user_id < 50) next();
    res.send("I will send user information #1");
  },
  function (req, res, next) {
    res.send("i will send user information #1.1");
  }
);

app.get("/user/:id", function (req, res) {
  res.send("i will send user information #2");
});

function logOriginalUrl(req, res, next) {
  console.log("Request URL:", req.originalUrl);
  next();
}
function logMethod(req, res, next) {
  console.log("Request Type:", req.method);
  next();
}
var logStuff = [logOriginalUrl, logMethod];

app.get("/arrayuser/:id", logStuff, function (req, res, next) {
  res.send("user info");
});
app.listen(3000);
