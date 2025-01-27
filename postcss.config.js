const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    require("autoprefixer"),
    postcssPresetEnv({
      browsers: "last 2 versions",
    }),
  ],
};
