const path = require('path');
const webpack = require("webpack");
module.exports = {
  entry: './dist/main.bundle.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ],
  mode: 'development'
};