const WebpackNotifierPlugin = require("webpack-notifier");
const path = require("path");

module.exports = {
  module: {},
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title: "Angular 8 custom webpack",
      contentImage: path.join(__dirname, "image.png")
    })
  ]
};
