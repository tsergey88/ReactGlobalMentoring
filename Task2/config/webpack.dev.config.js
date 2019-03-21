const common = require('./webpack.common.config');

module.exports = {
  ...common,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
}