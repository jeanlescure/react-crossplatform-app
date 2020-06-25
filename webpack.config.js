require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: './web/babel.config.js',
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './web/index.html',
      filename: './index.html',
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          DEBUG_LOG: JSON.stringify(process.env.DEBUG_LOG),
          API_URL: JSON.stringify(process.env.API_URL),
        },
      },
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.json'],
    alias: {
      'react-native': 'react-native-web',
    },
  },
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    disableHostCheck: true,
  },
  node: {
    global: true,
    fs: 'empty',
  }, // Fix: 'Uncaught ReferenceError: global is not defined', and 'Can't resolve 'fs''.
};
