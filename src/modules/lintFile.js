const errorHandler = require("./errorHandler.js");

const fs = require("fs");

const chalk = require("chalk");

exports.lint = function (file) {
  fs.readFile(file, function (err, data) {
    if (err) errorHandler.handleError(err);

    console.log(data);
  });
};
