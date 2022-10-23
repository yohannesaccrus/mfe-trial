const { merge }              = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson            = require('../package.json');
const commonConfig           = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename   : '[name].[contenthash].js',
    publicPath : '/auth/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name     : 'appAuth',
      filename : 'remoteEntry.js',
      exposes  : {
        './AppAuth': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
