var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "image/jpg" });
    let img = fs.readFileSync("car.jpeg");
    response.write(img);
    response.end();
  })
  .listen(3000);
console.log("Server is starting");
