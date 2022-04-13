var http = require("http");
var object = {
  name: "Jak",
  job: "developer",
};
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "application/json", // 30 days
  /** add other headers as per requirement */
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(JSON.stringify(object));
  })
  .listen(3000);
console.log("Server rinning at http://localhost:3000");
