const WebpackNotifierPlugin = require("webpack-notifier");
const path = require("path");

module.exports = {
  module: {},
  plugins: [
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title: "Storybook for Angular",
      contentImage: path.join(__dirname, "image.png")
    })
  ]
};
