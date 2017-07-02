const HTMLWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = () => {
  return {
    entry: ["./app/index.js"],
    devtool: "source-map",
    output: {
      path: __dirname + "/dist",
      filename: "index_bundle.js"
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.jsx?$/,
          use: ["babel-loader"]
        }
      ]
    },
    plugins: [HTMLWebpackPluginConfig]
  };
};
