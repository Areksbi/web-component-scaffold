const commonConfig = require('./webpack.common.js');
const path = require('path');

module.exports = {
  ...commonConfig,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9002,
  },
  devtool: 'inline-source-map',
  mode: 'development',
};
