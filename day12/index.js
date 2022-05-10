const express = require("express");
const app = express();
var router = express.Router();
router.get("/userinfo/:id", function (req, res, next) {
  res.send("User info with ID");
});

router.get("/user", function (req, res, next) {
  res.send("User info");
});
router.get("/userid/:id", function (req, res, next) {
  const id = req.params.id;
  if (id < 0) {
    const err = new Error("Cant find user with ID");
    err.status = "fail";
    err.statusCode = 500;
    return next(err);
  }
  res.send("User Info with ID " + id);
});

app.use("/user", router);
app.listen(3000);
