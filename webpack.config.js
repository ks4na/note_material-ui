const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:4]',
              },
            },
          },
        ],
        exclude: [/node_modules/],
      },
      // 不对 node_modules 下的 css 文件进行模块化
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [/node_modules/],
      },
      // imgs
      {
        test: /\.(jpg|jpeg|gif|bmp|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5120, // 5k
            name: '[name]_[hash:4].[ext]',
          },
        },
        exclude: /assets[\\/]fonts/,
      },
      // fonts
      {
        test: /\.(ttf|svg|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash:4].[ext]',
          },
        },
        exclude: /assets[\\/]imgs/,
      },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.ts', '.tsx'],
  },
}
