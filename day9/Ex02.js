const express = require("express");
const request = require("request");
const app = express();

app.get("/films", function (req, res) {
  request(
    "https://ghibliapi.herokuapp.com/films",
    function (err, response, body) {
      if (response) {
        // console.log(body);
        const data = [];
        data.push(body);
        const datafilm = JSON.parse(data);
        const table1 = `<table>`;
        const table2 = `</table>`;
        let films = "";
        datafilm.map((e) => {
          console.log(e);
          films =
            films +
            `
          <tr>
          <td>${e.title}</td>
          <td>${e.original_title}</td>
          <td>${e.original_title_romanised}</td>
          <td><img src = "${e.image}"></td>
          
          </tr>`;
        });
        let allData = table1 + films + table2;
        res.send(allData);
      }
    }
  );
});

app.listen(3000);
