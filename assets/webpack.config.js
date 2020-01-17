const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// Environment
const Env = process.env.MIX_ENV || 'dev'
const isProd = (Env === 'prod')

module.exports = (env, options) => {
  const devtool = isProd ? '#source-map' : '#cheap-module-eval-source-map'
  return {
    devtool: devtool,
    optimization: {
      minimizer: [
        new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    entry: {
      'app': ['./js/app.js'].concat(glob.sync('./vendor/**/*.js'))
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, '../priv/static')
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src')
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: {
            loader: 'vue-loader',
            options: {
              extractCSS: true
            }
          }

        },

        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-syntax-dynamic-import'
              ]
            }
          }
        },
        {
          test: /\.(css|scss|sass)$/,
          use: [
          // MiniCssExtractPlugin.loader, 'css-loader'
            process.env.NODE_ENV !== 'production'
              ? 'vue-style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader', 'sass-loader'
          ]
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'url',
          query: {
            limit: 10000,
            name: '[name].[ext]?[hash]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    plugins: isProd ? [
      new VueLoaderPlugin(),
      new ExtractTextPlugin({
        filename: 'css/[name].css',
        allChunks: true
      }),
      new CopyWebpackPlugin([{
        from: './static',
        to: path.resolve(__dirname, 'priv/static'),
        ignore: ['.*']
      }]),
      new UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true,
        beautify: false,
        comments: false
      })
    ] : [
      new VueLoaderPlugin(),
      new ExtractTextPlugin({
        filename: 'css/[name].css',
        allChunks: true
      }),
      new CopyWebpackPlugin([{
        from: './static',
        to: path.resolve(__dirname, 'priv/static'),
        ignore: ['.*']
      }])
    ]
  }
}
