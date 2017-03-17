const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const common = require('./webpack.common')

const ENV = 'production'

module.exports = webpackMerge(common, {
  devtool: 'cheap-module-source-map',

  output: {
    filename: '[name].[hash].js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify(ENV)
    }),
  ]
})
