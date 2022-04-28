const express = require("express");
const request = require("request");
const app = express();

app.get("/api/foods", function (req, res) {
  request("https://dev-api.mstars.mn/foods", function (err, response, body) {
    if (err) {
      throw err;
    } else {
      let foods = JSON.parse(body);
      console.log(body);
      const table1 = `<table>`;
      const table2 = `</table>`;
      const foodData = "";
      foods.data.map((e) => {
        foodData =
          foodData +
          `<tr>
          <td>${e.name}</td>
          <td>${e.price}</td>
          <td>${e.quantity}</td>
          <td>${e.stock}</td>
          </tr>`;
      });
      let allData = table1 + foodData + table2;
    }
  });
  res.send(allData);
});

app.listen(5000);
