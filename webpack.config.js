// Provided by Node
const path = require("path");
const public = path.join(__dirname, "public");

const { babelLoader, cssLoader } = require("./webpack/loaders");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // This needs to be an absolute path
    // __dirname is provided by node
    path: public,
    filename: "bundle.js",
  },
  module: {
    rules: [babelLoader, cssLoader],
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: public,
  },
};
