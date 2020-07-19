// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: [path.resolve(__dirname, 'src/index.tsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'functions/dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  devtool: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new FaviconsWebpackPlugin('./src/images/favicon.png'),
    new CleanWebpackPlugin(),
  ],
};
