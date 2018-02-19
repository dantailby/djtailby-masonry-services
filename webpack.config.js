
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const webpackConfig = {
  entry: './app/index.jsx',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['react', 'env'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DJ Tailby Stonemasonry Services',
      template: 'index.html',
    }),
  ],
  watch: true,
  devServer: {
    compress: true,
    port: 8081,
    watchContentBase: true,
    contentBase: path.join(__dirname, 'dist'),
  },
};

module.exports = webpackConfig;
