const path = require('path');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname, '.'),
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
  watch: true
}