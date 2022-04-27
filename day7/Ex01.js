const http = require("http");
const EventEmitter = require("events");
const { Http2ServerRequest } = require("http2");

const emitter = new EventEmitter();

emitter.on("message", function (message) {
  console.log("successful");
});

http.createServer((req, res) => {
  https.get("https://ghibliapi.herokuapp.com/films", (response) => {
    response.on();
  });
});
