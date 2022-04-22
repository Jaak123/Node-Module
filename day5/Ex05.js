var http = require("http");
var fs = require("fs");

http
  .createServer(function (request, response) {
    if (request.url.match(/^\/data/)) {
      const type = request.url.split("=")[1];
      if (type === "html") {
        fs.readFile("Ex05.html", (error, data) => {
          if (error) {
            throw error;
          } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
          }
        });
      } else if (type === "png") {
        fs.readFile("coder.png", (error, data) => {
          if (error) {
            throw error;
          } else {
            response.writeHead(200, { "Content-Type": "image/png" });
            response.write(data);
            response.end();
          }
        });
      } else if (type === "json") {
        fs.readFile("Ex05.json", (error, data) => {
          if (error) {
            throw error;
          } else {
            response.writeHead(200, { "Content-Type": "application/json" });
            response.write(data);
            response.end();
          }
        });
      } else {
        response.end("Not Found");
      }
    } else {
      response.end("Not Found");
    }
  })
  .listen(3000);
console.log("server is starting");
