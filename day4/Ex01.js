var http = require("http");

var object = {
  Type: "animal",
  Race: "sheep",
};
var obj = JSON.stringify(object);
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "application/json",
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(obj);
  })
  .listen(3000);
console.log("Server rinning at http://localhost:3000");
