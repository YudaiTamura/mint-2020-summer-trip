// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [path.resolve(__dirname, 'src/index.tsx')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'functions/dist'),
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
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
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './functions/dist',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new FaviconsWebpackPlugin('./src/images/favicon.png'),
  ],
};
