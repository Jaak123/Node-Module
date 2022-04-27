var http = require("http");
var https = require("https");
var fs = require("fs");
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("message", function (res) {
  console.log("message is successfully");
  https.get("https://ghibliapi.herokuapp.com/films", (response) => {
    let data = [];
    response.on("data", (chunk) => {
      data.push(chunk);
    });
    response.on("end", () => {
      const filmsShow = JSON.parse(Buffer.concat(data).toString());
      console.log(filmsShow);
      const table1 = `<table>`;
      const table2 = `</table>`;
      let filmsShown = "";
      filmsShow.map((e) => {
        filmsShown =
          filmsShown +
          `
          <tr>
          <td>${e.title}</td>
          <td><img src = "${e.image}" ></td>
          </tr>`;
      });
      let filmsData = table1 + filmsShown + table2;
      fs.writeFile("films.html", filmsData, (err) => {
        if (err) {
          throw err;
        } else {
          console.log("starting");
        }
      });
      res.end(filmsData);
    });
  });
});

http
  .createServer((request, response) => {
    if (request.url === "/films/show") {
      emitter.emit("message", response);
    }
    response.end();
  })
  .listen(3002);
