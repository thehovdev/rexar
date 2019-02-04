let path = require('path');
let WebpackNotifierPlugin = require('webpack-notifier');

/* --- main config ---*/
let bundle = 'app.js';
let entry = 'index.js';
let rootDir = 'public/js/';

/* --- for development --- */
let env = "development";
/* --- for development --- */
let minimize = false;

/* --- for production --- */
// let env = "production";
/* --- for production --- */
// let minimize = true;


module.exports = {
  entry: path.resolve(__dirname, rootDir + entry),
  output: {
    filename: bundle,
    path: path.resolve(__dirname, rootDir)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  mode: env,
  optimization: {
    minimize: false
  },
  plugins : [
    new WebpackNotifierPlugin({
        title: 'Webpack', 
        excludeWarnings: true, 
        alwaysNotify: true,
        contentImage: path.resolve(__dirname, 'public/webpack.png')
    }),
  ],
};

