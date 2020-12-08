const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9002
  },
  devtool: 'inline-source-map',
  entry: './src/wc-tag.js',
  mode: 'development',
  output: {
    filename: 'wc-tag.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ],
};
