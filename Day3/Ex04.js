var http = require("http");
var obj = {
  success: false,
  data: [
    {
      name: "MyName",
      age: 23,
    },
    {
      name: "NextName",
      age: 26,
    },
  ],
};

var object = JSON.stringify(obj);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
  "Access-Control-Max-Age": 2592000,
  "Content-Type": "application/json",
};
http
  .createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(object);
  })
  .listen(3000);
console.log("Server rinning at http://localhost:3000");
