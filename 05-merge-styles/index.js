const fs = require("fs");
const project = require("path").join(__dirname, "project-dist");
const style = require("path").join(__dirname, "styles");
const bundle = require("path").join(project, "bundle.css");
const write = fs.createWriteStream(bundle);

stageOne();

function stageOne() {
  fs.readdir(style, (err, files) => {
    stageTwo(files);
  });
}

function stageTwo(files) {
  files.forEach((file) => {
    fs.stat(`${style}/${file}`, (err, data) => {
      stageThree(file, data);
    });
  });
}

function stageThree(file, data) {
  if (data.isFile() && require("path").extname(file) === ".css") {
    fs.readFile(`${style}/${file}`, "utf8", (err, data) => {
      write.write(data);
    });
  }
}
