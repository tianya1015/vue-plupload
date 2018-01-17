const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin')

// const wagFeCss = require('@wag/fe-css');

const path = require('path')

const extractCSS = new ExtractTextPlugin('css/[name].css')
const isDev = process.env.NODE_ENV === 'dev'

let plugins = [extractCSS]
if (!isDev) {
  plugins.push(new UglifyJSPlugin())
} else {
  const dashboard = new Dashboard();
  plugins.push(new DashboardPlugin(dashboard.setData))
}


module.exports = {
  entry: {
    index: isDev ? './test/index.js' : './src/index.js'
  },
  output: {
    filename: isDev ? '[name].build.js' : '[name].min.js',
    libraryTarget: isDev ? 'var' : 'umd',
    path: path.join(__dirname, isDev ? './test' : './dist'),
  },
  plugins,
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.min.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {modules: false}]
            ]
          }
        }],
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'lib'),
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.styl$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'stylus-loader',
              options: {
                // use: [wagFeCss]
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: '1',
            name: '[name].[ext]'
          }
        }
      },
      {
        test: /\.(ogg|mp3)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    contentBase: [
      path.join(__dirname, "test"), 
      path.join(__dirname, "dist")
    ],
    compress: true,
    port: 9000
  }
}
