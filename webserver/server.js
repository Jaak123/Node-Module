var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write("<h1>Hello Node!!!!</h1>\n");
    response.end();
  })
  .listen(3001);
console.log("Server rinning at http://localhost:3001");
