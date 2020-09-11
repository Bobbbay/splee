const chalk = require("chalk");

exports.handleError = function (err) {
  console.log(
    chalk.black.bgRed("ERROR."),
    chalk.red(
      "An error has occured. Please review your written and command, or submit a bug to https://github.com/Bobbbay/splee/.\n\nWe recieved the following error message:\n---\n",
      chalk.red(err)
    )
  );
  switch (err.errno) {
    case -2:
      console.log(
        chalk.magenta(
          "\nBased on the error code, we assume this is because the "
        ),
        chalk.black.bgMagenta.bold("file does not exist"),
        chalk.magenta(
          ". If this is he case, please correct the file. If not, submit a bug report."
        )
      );
      break;
    default:
      console.log();
  }
};
