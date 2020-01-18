const path = require('path')
const glob = require('glob')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// Environment
const Env = process.env.MIX_ENV || 'dev'
const isProd = (Env === 'prod')

module.exports = (env, options) => {
  const devtool = isProd ? '#source-map' : '#cheap-module-eval-source-map'
  return {
    devtool: devtool,
    optimization: {
      splitChunks: {
        chunks: 'all'
      },
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
        '@': path.resolve('src'),
        'monent': 'moment/src/moment'
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
      // new BundleAnalyzerPlugin(),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /fr-ca|en-ca/),

      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css'
      }),
      new CopyWebpackPlugin([{
        from: './static',
        to: path.resolve(__dirname, 'priv/static'),
        ignore: ['.*']
      }]),
      new UglifyJsPlugin({
        sourceMap: true,
        cache: true,
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: true,
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
          safari10: true
        }
      })
    ] : [
      new BundleAnalyzerPlugin(),
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /fr-ca|en-ca/),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[id].css'
      }),
      new CopyWebpackPlugin([{
        from: './static',
        to: path.resolve(__dirname, 'priv/static'),
        ignore: ['.*']
      }])
    ]
  }
}
