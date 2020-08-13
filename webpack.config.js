const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[name].[hash:8].js',
    chunkFilename: 'static/js/[id].[chunkhash:8].js',
    publicPath: 'http://localhost:3000/'
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.(sa|sc|c)ss$/i,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader', 'sass-loader'
      //   ]
      // },
      {
        test: /\.(jpe?g|png|gif|mp4|webm)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          outputPath: 'static/media'
        }
      },
      {
        test: /\.(svg|eot|ttf|woff?)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000,
            fallback: {
              loader: 'file-loader',
              options: {
                name: '[name].[hash:8].[ext]',
                publicPath: "/static/media",
                outputPath: 'static/media'
              }
            }
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash:8].css',
      chunkFilename: 'static/css/[id].[hash:8].css'
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 3000
  }
}