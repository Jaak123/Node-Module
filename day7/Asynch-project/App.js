const request = require("request");

function printFilms(str, callback) {
  request(
    "hhtps:ghibliapi.herokuapp.com/films",
    function (error, response, body) {
      callback(str);
    }
  );
}
module.exports = printFilms;
