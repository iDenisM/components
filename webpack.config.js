const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');

const config = {
  entry: APP_DIR + '/app.js',
  output: {
    filename: 'app.bundle.js',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        use: ['babel-loader']
      }
    ]
  }
}

module.exports = config;