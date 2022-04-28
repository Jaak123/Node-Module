const request = require("request");

function printFilms(str, callback) {
  return new Promise((resolve, reject) => {
    request(
      "https://ghibliapi.herokuapp.com/films",
      function (error, response, body) {
        if (response) {
          console.log(str);
          resolve();
        } else {
          reject("rejected");
        }
      }
    );
  });
}
module.exports = printFilms;
