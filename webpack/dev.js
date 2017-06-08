const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './js/main.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/(node_modules)/, /\.spec\.jsx$/],
        include: [
          path.resolve(__dirname, '../js')
        ],
        use: [
          {
            loader: 'babel-loader',
            query: {
              cacheDirectory: true
            }
          },
          {
            loader: 'eslint-loader',
            query: {
              failOnWarning: false,
              failOnError: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.hasOwnProperty('NODE_ENV') ? process.env.NODE_ENV : JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html')
    }),
  ],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, '../styles/')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, '../'), // match the output path
    compress: true,
    port: 3001,
    historyApiFallback: true
  }
};
