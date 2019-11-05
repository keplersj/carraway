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
  console.log("Starting Gatsby develop");
  await execa("gatsby", ["develop"], { stdout: "inherit", stderr: "inherit" });
  console.log("Cleaning up Carraway's temporary config");
  await del(["gatsby-config.js"]);
}
