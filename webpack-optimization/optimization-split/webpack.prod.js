const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new ExtractTextPlugin({
      filename: "[name].css"
    })
  ],
  mode: "production",
  optimization: {
    runtimeChunk: {     // 自动拆分 runtime 文件
      name: 'manifest'
    },   
    splitChunks:{
      chunks: 'initial',        // initial(初始块)、async(按需加载块)、all(全部块)，默认为async
      minSize: 30000,           // 形成一个新代码块最小的体积（默认是30000）
      minChunks: 1,             // 在分割之前，这个代码块最小应该被引用的次数（默认为 1 ）  
      maxAsyncRequests: 5,      // 按需加载时候最大的并行请求数
      maxInitialRequests: 3,    // 一个入口最大的并行请求数
      name:"common",            // 打包的 chunks 的名字（字符串或者函数，函数可以根据条件自定义名字）
      automaticNameDelimiter: '~',  // 打包分隔符
      cacheGroups: {           // 这里开始设置缓存的 chunks
        vendors: {             
          name: 'vendors',
          chunks: 'all',
          priority: -10,        // 缓存组打包的先后优先级（只用于缓存组）
          reuseExistingChunk: true, // 可设置是否重用该 chunk （只用于缓存组）
          test:/[\\/]node_modules[\\/]/  // 只用于缓存组
        },
        components: {
          test: /components\//,
          name: "components",
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: "css-loader", options: { modules: true, localIdentName: "[name]__[local]-[hash:base64:5]" } },
            {
              loader: "postcss-loader",
              options: {
                ident: "postcss",
                plugins: [require("autoprefixer")(), require("postcss-preset-env")()]
              }
            }
          ]
        })
      }
    ]
  }
});
