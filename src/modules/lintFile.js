const errorHandler = require("./errorHandler.js");

const fs = require("fs");

const chalk = require("chalk");

exports.lint = function (file, verbose = false) {
  fs.readFile(file, function (err, data) {
    if (err) errorHandler.handleError(err, verbose);

    console.log(data);
  });
};
