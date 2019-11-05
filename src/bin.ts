#!/usr/bin/env node
import yargs from "yargs";
import {
  argsBuilder as buildArgs,
  commandHandler as buildHandler
} from "./commands/build";
import {
  argsBuilder as developArgs,
  commandHandler as developHandler
} from "./commands/develop";
import {
  argsBuilder as serveArgs,
  commandHandler as serveHandler
} from "./commands/serve";
import {
  argsBuilder as cleanArgs,
  commandHandler as cleanHandler
} from "./commands/clean";

yargs
  .command("build", "build your site using Gatsby", buildArgs, buildHandler)
  .command(
    "develop",
    "run your Gatsby site in develop mode",
    developArgs,
    developHandler
  )
  .command("serve", "serve your built Gatsby site", serveArgs, serveHandler)
  .command(
    "clean",
    "clean Gatsby build products and Carraway side-effects",
    cleanArgs,
    cleanHandler
  )
  .demandCommand()
  .help().argv;
