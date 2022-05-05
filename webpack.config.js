const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bandle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
        title: 'RSS-Virtual-Keyboard',
        devServer: {
        static: './dist',
        port: 3002,
      },
        filename: 'index.html',
        template: 'src/index.html',
    }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader",],
        },
        {
            test: /\.js$/,
            enforce: "pre",
            use: ["source-map-loader"],
          },
    ],
  },

  devtool: 'eval-source-map',

  devServer: {
    static: './dist',
    port: 3002,
  },
};