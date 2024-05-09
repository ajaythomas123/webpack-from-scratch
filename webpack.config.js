module.exports = {
  mode: 'none',
  entry: { 
    mainApp: './src/client/mainApp/index.js',
    popupApp: './src/client/popupApp/index.js',
    utils: ['./src/utils/loggers.js'],
  },
}