
const fs = require("fs");
let fileContent = fs.readFileSync(`${__dirname}/text.txt`, "utf8");
console.log(fileContent);
