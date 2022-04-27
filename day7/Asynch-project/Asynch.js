const printFilms = require("./App.js");

function printAll() {
  printFilms("A");
  printFilms("B");
  printFilms("C");
}

printAll();

module.exports = printAll;
