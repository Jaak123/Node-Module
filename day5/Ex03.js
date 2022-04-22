var http = require("http");

var fs = require("fs");

const content = "Unlock a passion, side hustle, or new professional skill";

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.writeFileSync("Ex03.html", content);
    let hmtl2 = fs.readFileSync("Ex03.html");
    response.write(hmtl2);
    response.end();
  })
  .listen(3002);
console.log("server is starting");
