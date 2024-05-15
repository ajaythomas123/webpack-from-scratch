const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
  mode: env.NODE_ENV,
  devtool: 'source-map',
  context: path.resolve(__dirname, '.'),
  // The entry paths are all relative to the context path.
  entry: {
    mainApp: { import: './src/client/mainApp/index.js', dependOn: ['utils'] },
    utils: ['./src/utils/loggers.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash].bundle.js',
    // Deletes the dist folder every time webpack is run.
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    /**
     * DefinePlugin replaces every instance of process.env in the code at compile time.
     * It DOES NOT make process.env available in the browser or code during runtime.
     */
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    }),
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
    port: 9005,
  },
});