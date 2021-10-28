const WindiCSS = require("windicss-webpack-plugin");

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new WindiCSS());
    return config;
  },
};
