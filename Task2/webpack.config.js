const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_TOOL = process.env.NODE_ENV === 'development' ? 'inline-source-map' : false;

module.exports = {
  mode: NODE_ENV,
  entry: {
    app: './src/index.js'
  },
  devtool: DEV_TOOL,
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({ filename: 'style.css' }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  optimization: {
    minimize: NODE_ENV === "production",
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
  },
};