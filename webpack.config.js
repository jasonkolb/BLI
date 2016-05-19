var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/app.js",
  output: {
    publicPath: "/assets/",
    filename: "./dist/assets/bundle.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }
    ]
  }
};
