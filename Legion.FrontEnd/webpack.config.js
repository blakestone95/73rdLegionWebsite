const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// TODO: Fix favicon not working in dev mode. Fix serving minified files instead of normal files.
module.exports = {
  entry: './index.js',
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')]
  },
  mode: 'development', // Can add more modes later if necessary
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // Copied from https://github.com/coryhouse/react-slingshot/issues/128
        test: /\.(jpe?g|ico|gif|png|svg|woff|ttf|wav|mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve('./dist'),
    publicPath: '/',
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve('./dist/index.html'),
      favicon: path.resolve('./assets/images/favicon.ico'),
      template: path.resolve('./index.html')
    })
  ],
  performance: {
    hints: false
  }
};