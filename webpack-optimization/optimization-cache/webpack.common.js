const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    es6Index: "./src/es6Index.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js", // 非入口 chunk 的名称
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js", ".css", ".json"],
    alias: {
      asset: __dirname + "/src/asset"
    } //配置别名可以加快webpack查找模块的速度
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      hash: true,
      chunks: ["app", "vendors", "commons", "manifest"]
    }),
    new HtmlWebpackPlugin({
      filename: "es6Index.html",
      hash: true,
      chunks: ["es6Index", "vendors", "commons", "manifest"]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[name]-[hash:5].[ext]"
            }
          },
          "image-webpack-loader"
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
        use: ["url-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
        use: ["xml-loader"]
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
