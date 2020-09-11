#!/usr/bin/env node

const lintFile = require("./modules/lintFile.js");

var yargs = require("yargs");
var argv = yargs.argv;

const chalk = require("chalk");

yargs
  .usage("Usage: $0 <command> <file> [options]")
  .command("lint", "Lint a file")
  .example("$0 lint src/index.js", "Lint src/index.js")
  .demandCommand(1)
  .alias("f", "file")
  .nargs("f", 1)
  .demandOption(["f"])
  .alias(["v"])
  .help("h")
  .alias("h", "help")
  .epilog("Copyright 2020").argv;

switch (argv._[0]) {
  case "lint":
    lintFile.lint(argv.f);
    break;
  default:
}

/*yargs(hideBin(process.argv))
  .command(
    "lint",
    "Lint a file, or recursively a directory",
    () => {},
    (argv) => {
      console.log(argv);
      lintFile(argv._[1]);
    }
  )
  .demandCommand(1).argv;

/*
console.log(argv);

switch (argv._[0]) {
  case undefined:
    console.log("Nothing to do!");
    break;
  default:
    lintFile(argv._[0]);
}
*/
