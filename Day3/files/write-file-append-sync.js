var fs = require("fs");

var content = "we are appending this file synchronously using node.";

fs.appendFileSync("message.txt", content);

console.log("File appended successfully");
