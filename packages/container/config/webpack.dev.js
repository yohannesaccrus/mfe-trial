const { merge } = require('webpack-merge')

const HtmlWebpackPlugin      = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const configCommon = require('./webpack.common')
const packageJson  = require('../package.json')

const configDev = {
  mode      : 'development',
  output    : {
    publicPath: 'http://localhost:8080/'
  },
  devServer : {
    port               : 8080,
    historyApiFallback : true
    // historyApiFallback: {
    //   index: '/index.html',
    // },
  },
  plugins   : [
    new ModuleFederationPlugin({
      name    : 'container',
      remotes : {
        appMarketing : 'appMarketing@http://localhost:8081/remoteEntry.js',
        appAuth : 'appAuth@http://localhost:8082/remoteEntry.js',
      },
      shared  : packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

module.exports = merge(configCommon, configDev)

