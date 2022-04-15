var http = require("http");
var fs = require("fs");

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
    } else if (request.url === "/mp4") {
      response.writeHead(200, { "Content-Type": "video/mp4" });
      const mp4 = fs.readFileSync("");
      response.end(mp4);
    } else {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write("Not Found");
      response.end();
    }
    response.end();
  })
  .listen(3000);
console.log("Server is starting at 3000");
