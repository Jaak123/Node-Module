const express = require("express");
const fs = require("fs");
const app = express();

app.get("/:api", function (req, res) {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      throw err;
    } else {
      //   console.log(data);
      const data1 = JSON.parse(data);
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
    }
  });
});

app.listen(3000);
