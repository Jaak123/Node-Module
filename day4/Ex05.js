var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "image/png" });
    const data = fs.readFileSync("day4-ex04-05.png");
    response.end(data);
  })
  .listen(3000);
console.log("Server is starting 3000");
