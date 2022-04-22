var http = require("http");

const obj = {
  result: true,
  grade: null,
  rollno: 210,
};

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(obj));
    response.end();
  })
  .listen(3001);
console.log("server is starting");
