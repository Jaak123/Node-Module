var http = require("http");
var fs = require("fs");
var content = "Free fake API for testing and prototyping.";

fs.writeFileSync("content.html", content);
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    const data = fs.readFileSync("content.html");
    response.end(data);
  })
  .listen(3002);
console.log("Server is starting 3002");
