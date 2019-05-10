const webpack = require('webpack');
const path = require('path');

const config = {
  devServer: {
    port: 8000,
    inline: true,
    hot: true,
    publicPath: '/dist/'
  },
  
  entry: ['webpack/hot/dev-server', './src/components/App.tsx'],

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: 'bundle.js'
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  target: 'web',

  mode: "production",

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { exclude: /node_modules/ },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ],
  },

};

module.exports = config;