const path = require('path');
const webpack = require('webpack');

/* if babel transciber doesn't work try below:
  main: ['babel-polyfill',
        './site/js/main.js'],
*/
const entryPoint = {
  main: './public/scripts/main.js'
};

module.exports = {
  entry: entryPoint,
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: '[name].min.js',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: '/node_modules/',
    }]
  }
}
