const request = require("request");

request(
  "hhtps:ghibliapi.herokuapp.com/films",
  function (error, response, body) {
    console.log(body);
  }
);
