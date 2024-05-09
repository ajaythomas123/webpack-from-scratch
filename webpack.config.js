const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'none',
  context: path.resolve(__dirname, '.'),
  // The entry paths are all relative to the context path.
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
      // The filename path is relative to output.path.
      filename: 'index.html'
    })
  ],
  devServer: {
    static: {
      /**
       * webpack-dev-server stores the output files in memory.
       * When `npx webpack serve` is run, this directory won't be generated in the filesystem if it doesn't already exist.
       */
      directory: path.join(__dirname, 'dist'),
      // Watches for changes in the static directory
      watch: false
    },
    // For live reloading to work, hot module replacement has to be disabled.
    hot: false,
    /**
     * liveReload refreshes the browser everytime file changes are detected. This happens when
     * - Webpack regenerates the bundled files.
     * - When a there is a file change in a static directory that has the the watch property set to true. 
     */
    liveReload: true,
    compress: true,
    port: 9000,
  },
}