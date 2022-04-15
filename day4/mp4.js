var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "video/mp4" });

    response.end();
  })
  .listen(3000);
console.log("Server rinning at http://localhost:3000");
