var http = require("http");
var fs = require("fs");
const headers = {
  "Content-Type": "application/pdf",
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    const data = fs.readFileSync("http.pdf");
    response.end(data);
  })
  .listen(3000);
console.log("Server rinning at http://localhost:3000");
