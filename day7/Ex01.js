const http = require("http");
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("message", function (message) {
  console.log("successful");
});

http
  .createServer(function (req, res) {
    emitter.emit("message");
    res.end();
  })
  .listen(3000);
