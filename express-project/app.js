const express = require("express");
const fs = require("fs");
const path = require("path");

const cors = require("cors");
const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  // res.header("Content-Type", "image/jpeg");
  next();
});

app.use("/static", express.static(path.join(__dirname, "public")));

app.get("/cv/:jak", function (req, res) {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
      const data1 = JSON.parse(data);
<<<<<<< HEAD
      const filterData = data1.map((e) => {
        // console.log(e);
        if (req.params.api === "age") {
          //   console.log;
          return e.age;
        } else if (req.params.api === "name") {
          return e.name;
        } else if (req.params.api === "major") {
          return e.major;
        } else if (req.params.api === "profile") {
          return e;
        } else if(req.params.api === 'description'){
            return 
        }
      });
      res.send(filterData);
=======
      console.log(data1);

      // console.log(e);
      if (req.params.jak === "age") {
        //   console.log;
        res.send(data1.age);
      } else if (req.params.jak === "name") {
        res.send(data1.name);
      } else if (req.params.jak === "major") {
        res.send(data1.major);
      } else if (req.params.jak === "profile") {
        res.send(data1);
      } else if (req.params.jak === "description") {
        res.send(data1.description);
      } else if (req.params.jak === "desc2") {
        res.send(data.desc2);
      }
>>>>>>> ef0f05752f65cf9d10628f86d3128195fc344cf0
    }
  });
});

app.listen(3000);
