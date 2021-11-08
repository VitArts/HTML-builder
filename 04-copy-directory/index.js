const fs = require("fs");
const origin = require("path").join(__dirname, "files");
const copy = require("path").join(__dirname, "files-copy");

fs.stat(copy, function (err) {
  if (!err) {
    fs.readdir(copy, (err, files) => {
      files.forEach((file) => {
        fs.unlink(require("path").join(copy, file), () => {});
      });
    });
  } else if (err.code === "ENOENT") {
    fs.mkdir(copy, () => {});
  }

  fs.readdir(origin, (err, files) => {
    files.forEach((file) => {
      fs.copyFile(
        require("path").join(origin, file),
        require("path").join(copy, file),
        () => {}
      );
    });
  });
});
