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
      {
        test: /\.(jpg|png|svg)$/,
        loader: "url-loader",
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  devtool: "none",
};
