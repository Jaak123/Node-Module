var http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200);
    response.write(
      "<table><td><tr>Name</tr><tr>Age</tr><tr>Gender</tr><tr>Status</tr><td/></table>"
    );
    response.write(
      "<table><td><tr>Khatnaa</tr><tr>21</tr<tr>Male</tr><tr>Student</tr><td/></table>"
    );
    response.write(
      "<table><td><tr>Enkhee</tr><tr>25</tr<tr>Female</tr><tr>Student</tr><td/></table>"
    );
    response.end();
  })
  .listen(3000);
console.log("Server rinning at http://localhost:3000");
