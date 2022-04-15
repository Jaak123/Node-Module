var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "image/jpg" });
    const jpg = fs.readFileSync("jpg.jpeg");
    response.end(jpg);
  })
  .listen(3000);
console.log("Server rinning at http://localhost:3000");
