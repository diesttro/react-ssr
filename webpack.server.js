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
  externals: [webpackNodeExternals()],
  plugins: [new NodemonPlugin()],
};

module.exports = merge(sharedConfig, serverConfig);
