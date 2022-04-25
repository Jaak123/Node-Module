var http = require("http");
var https = require("https");
var fs = require("fs");

http
  .createServer((request, res) => {
    https
      .get("https://ghibliapi.herokuapp.com/films", (response) => {
        let data = [];
        response.on("data", (chunk) => {
          console.log(chunk);
          data.push(chunk);
        });
        response.on("end", () => {
          const films = JSON.parse(Buffer.concat(data).toString());
          console.log(films);

          fs.writeFile("films.json", JSON.stringify(films), (err) => {
            if (err) {
              throw err;
            } else {
              console.log("successfully");
            }
          });
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
    res.end();
  })
  .listen(3001);
