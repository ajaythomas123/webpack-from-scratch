module.exports = (api) => ({
  presets: [
    [
      "@babel/preset-react",
      {
        /**
         * api.env takes the value of BABEL_ENV environment variable if it's set.
         * Otherwise, it takes the value of NODE_ENV.
         */
        development: api.env() === "development",
      },
    ],
  ],
});