const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, './src/style/'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['app.*'] }),
    // new CopyPlugin({
    //   patterns: [
    //     { from: "./src/scripts/vendor/three.r123.min.js", to: "three.r123.min.js" },
    //     { from: "./src/scripts/vendor/roundedBox.js", to: "roundedBox.js" },
    //     { from: "./src/scripts/vendor/TweenMax.1.20.3.min.js", to: "TweenMax.1.20.3.min.js" },
    //   ],
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
}
