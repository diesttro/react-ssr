const path = require('path');
const sharedConfig = require('./webpack.shared');
const { merge } = require('webpack-merge');

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
};

module.exports = merge(sharedConfig, clientConfig);
