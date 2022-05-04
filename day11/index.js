const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");
const { fstat } = require("fs");
const path = require("path");
const fs = require("fs");

app.use(express.json());
app.post(
  "/register",
  body("email").isEmail(),
  body("phone").isLength({ min: 8, max: 8 }),
  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("validation");
  }
);

app.get("/sports", (req, res) => {
  const data = [
    {
      name: "Basketball",
      url: "/basket.jpeg",
    },
    {
      name: "Footbal",
      url: "/footbal.jpeg",
    },
    {
      name: "Tennis",
      url: "/tennis.webp",
    },
  ];
  res.render("sport", { data: data });
});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/404", function (req, res) {
  res.render("404", { message: "oopsie! " });
});

app.get("/js", function (req, res) {
  var data = {
    name: "Jak",
    hobbies: ["playing football", "playing chess", "cycling"],
  };
  res.render("js", { data: data });
});
app.listen(3000);
