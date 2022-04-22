var http = require("http");
var fs = require("fs");

const dataJson = {
  name: "sonoo",
  salary: 56000,
  married: true,
};

let jsonData = JSON.stringify(dataJson);

http
  .createServer((request, response) => {
    response.writeHead(200);
    if (request.url === "/html") {
      fs.readFile("content.html", (error, data) => {
        if (error) {
          throw error;
        } else {
          console.log("yes");
          response.end(data);
        }
      });
    } else if (request.url === "/PNG") {
      fs.readFile("png.jpeg", (error, data) => {
        if (error) {
          throw error;
        } else {
          console.log("yep");
          response.end(data);
        }
      });
    } else if (request.url === "/json") {
      response.end(jsonData);
    }
  })
  .listen(3000);
