import { Argv } from "yargs";
import del from "del";

export function argsBuilder(args: Argv): Argv {
  return args;
}

export async function commandHandler(): Promise<void> {
  console.log(
    "Deleting Carrway's temporary Gatsby config and Gatsby's artifacts."
  );
  await del(["./gatsby-config.js", "./.cache/", "./public/"]);
}
