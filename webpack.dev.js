const path = require("path");

module.exports = {
  mode: "development",
  entry: [path.resolve(__dirname, "src/index.tsx")],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "functions/dist"),
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },

  devtool: "inline-source-map",
  devServer: {
    contentBase: "./functions/dist",
  },
};
