var http = require("http");
var https = require("https");
var fs = require("fs");

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("message", function (res) {
  console.log("request is success");
  https.get("https://ghibliapi.herokuapp.com/films", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const films = JSON.parse(Buffer.concat(data).toString());
      console.log(films);
      fs.writeFile("films.json", JSON.stringify(films), (err) => {
        if (err) {
          throw err;
        } else {
          console.log("starting");
        }
      });
      res.end();
    });
  });
});

http
  .createServer((request, response) => {
    if (request.url === "/films") {
      emitter.emit("message", response);
    }
    response.end();
  })
  .listen(3001);
