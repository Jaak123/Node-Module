const request = require("request");
const http = require("http");
const EventEmitter = require("events");
const emitter = new EventEmitter();
const fse = require("fs-extra");

emitter.on("films-show", function (res) {
  console.log("request is success");
  request(
    "hhtps:ghibliapi.herokuapp.com/films",
    function (error, response, body) {
      if (error) console.log(error);

      console.log(body);
      fse.writeJson("films.json", body, (err) => {
        if (err) {
          throw err;
        } else {
          console.log("starting");
        }
      });

      res.on(body);
    }
  );
});

http
  .createServer(function (req, res) {
    if (req.url === "/films") {
      emitter.emit("films-show", res);
    }
    res.end();
  })
  .listen(3000);
