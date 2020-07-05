const path = require("path");

module.exports = {
  mode: "production",
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
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  devtool: "none",
};
