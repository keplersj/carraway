import { Argv } from "yargs";
import execa from "execa";
import del from "del";
import { createGatsbyConfig } from "../lib/create-gatsby-config";

export function argsBuilder(args: Argv): Argv {
  return args;
}

export async function commandHandler(): Promise<void> {
  console.log("Creating Carraway's temporary Gatsby config");
  await createGatsbyConfig();
  console.log("Starting Gatsby build");
  await execa("gatsby", ["build"], { stdout: "inherit", stderr: "inherit" });
  console.log("Cleaning up Carraway's temporary config");
  await del(["gatsby-config.js"]);
}
