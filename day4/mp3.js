var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "audio/mp3" });
    const mp3 = fs.readFileSync("eminem.mp3");
    response.end(mp3);
  })
  .listen(3000);
console.log("Server rinning at http://localhost:3000");
