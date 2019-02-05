// Combined 'require' statements
let config = require('config');
let path = require('path');
let nodeExternals = require('webpack-node-externals');
let webpack = require('webpack');
let WebpackNotifierPlugin = require('webpack-notifier');

// server side main directory
let serverDir = config.get('webpack.serverDir');
// client side main directory
let clientDir = config.get('webpack.clientDir');

// server and client side bundle and entry files
let bundle = config.get('webpack.bundle');
let entry = config.get('webpack.entry');

// for development 
let env = config.get('app.env');
// for development
let minimize = config.get('app.minimize');


let clientConfig = {
    target: "web",
    entry: {
        app: [path.resolve(__dirname, clientDir + entry)]
    },
    output: {
      filename: bundle,
      path: path.resolve(__dirname, clientDir)
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
      minimize: minimize
    },
    plugins : [
      new WebpackNotifierPlugin({
          title: 'Webpack (Client)', 
          excludeWarnings: true, 
          alwaysNotify: true,
          contentImage: path.resolve(__dirname, 'public/webpack.png')
      })
    ],
}

let serverConfig = {
    target: "node",
    entry: {
        app: [path.resolve(__dirname, serverDir + entry)]
    },
    output: {
        filename: bundle,
        path: path.resolve(__dirname, serverDir),
    },
    mode: env,
    externals: [nodeExternals()],
    plugins : [
        new WebpackNotifierPlugin({
            title: 'Webpack (Server)', 
            excludeWarnings: true, 
            alwaysNotify: true,
            contentImage: path.resolve(__dirname, 'public/webpack.png')
        }),
      ],
}

module.exports = [ clientConfig, serverConfig ];