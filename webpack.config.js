const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname, '.'),
  // The entry paths are all relative to the context path
  entry: {
    mainApp: './src/client/mainApp/index.js',
    popupApp: './src/client/popupApp/index.js',
    utils: ['./src/utils/loggers.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash].bundle.js',
    // Deletes the dist folder every time webpack is run.
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack from Scratch',
      // The filename path is relative to output.path
      filename: 'index.html'
    })
  ],
  watch: true
}