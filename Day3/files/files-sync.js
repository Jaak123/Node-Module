var fs = require("fs");

var fileName = "content.txt";

var content = fs.readFilesSync(fileName);

console.log("Content: " + content);
