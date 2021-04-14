import { build } from "vue-webpack";

const config = build({
  env: "development",
  mode: "server",
  inputFilePath: "./src/client/server-entry.js",
  outputFileName: "bundle",
  outputPath: "./dist"
});
