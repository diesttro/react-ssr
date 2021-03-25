const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');
const sharedConfig = require('./webpack.shared');
const { merge } = require('webpack-merge');

const serverConfig = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/,
        exclude: /node_modules/,
        loader: 'ignore-loader',
      },
    ],
  },
  externals: [webpackNodeExternals()],
  plugins: [new NodemonPlugin()],
};

module.exports = merge(sharedConfig, serverConfig);
