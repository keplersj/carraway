import writeFileAtomic from "write-file-atomic";

const templateConfig = `module.exports = require("./package.json")["gatsby"] || require("./gatsby.config.js");`;

export async function createGatsbyConfig(): Promise<void> {
  await writeFileAtomic("gatsby-config.js", templateConfig);
}
