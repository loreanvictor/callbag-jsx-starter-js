// Webpack Configuration File
// See all supported options: https://webpack.js.org/configuration/

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


/** @type {import("webpack").Configuration } */
module.exports = {
  mode: 'production',
  entry: {
    app: './src/index.jsx',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ title: 'Callbag-JSX Sample Project!' }),
  ],
}
