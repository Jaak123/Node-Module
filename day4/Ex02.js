var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Hello Jak</h1>");
    response.write("<p>JavaScript Number to String</p>");
    response.write("<ol><li>Coffee</li></ol>");
    response.write("<ul><li>Milk</li></ul>");
    response.end();
  })
  .listen(3001);
