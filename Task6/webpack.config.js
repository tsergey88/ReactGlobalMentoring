const path = require("path");

const NODE_ENV = process.env.NODE_ENV || "development";
const config =
  NODE_ENV === "production"
    ? require("./config/webpack.prod.config")
    : require("./config/webpack.dev.config.js");

module.exports = {
  mode: NODE_ENV,
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  ...config
};
