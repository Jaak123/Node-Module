var http = require("http");
var fs = require("fs");
var queryString = require("querystring");

http
  .createServer((request, response) => {
    if (request.url === "/pdf") {
      response.writeHead(200, { "Content-Type": "application/pdf" });
      const pdf = fs.readFileSync("http.pdf");
      response.end(pdf);
    } else if (request.url === "/jpg") {
      response.writeHead(200, { "Content-Type": "image/jpg" });
      const image = fs.readFileSync("jpg.jpeg");
      response.end(image);
    } else if (request.url === "/mp3") {
      response.writeHead(200, { "Content-Type": "audio/mp3" });
      const mp3 = fs.readFileSync("eminem.mp3");
      response.end(mp3);
    } else if (request.url === "/q?a=3&x=5&y=6&z=9") {
      //   console.log("query param");
      const { x, y, z } = queryString.parse(request.url.slice(3));
      response.write(`${Number(x) + Number(y) + Number(z)}`);
      //   console.log(x);
      //   console.log(y);
      //   console.log(z);
      response.end();
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not Found");
      response.end();
    }
    response.end();
  })
  .listen(3000);
console.log("Server is starting at 3000");
