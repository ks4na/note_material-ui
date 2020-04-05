const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: '0.0.0.0', // 允许以非localhost方式访问，方便手机，其他机器访问本地项目
    historyApiFallback: {
      disableDotRule: true,
    }, // browserRouter本地测试需要开启
    disableHostCheck: true, // 本地hosts劫持测试时需要开启
    // 关闭 WDS 在控制台的 log
    clientLogLevel: 'none',
  },
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
