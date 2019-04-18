const webpack = require("webpack");
const Uglify = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.config");

module.exports = {
  ...common,
  optimization: {
    minimize: true,
    minimizer: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new Uglify({
        uglifyOptions: {
          compress: {
            drop_console: false,
            drop_debugger: true
          },
          sourceMap: false,
          warnings: false
        }
      })
    ]
  }
};
