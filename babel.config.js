const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        development: process.env.BABEL_ENV === "development",
      },
    ],
  ],
};