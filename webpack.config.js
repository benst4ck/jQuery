var webpack = require("webpack");  // 后面的代码并没有对webpack的内置插件进行使用 所以只需要全局安装webpack即可 可以不在项目开发依赖中安装
var path = require("path");
module.exports = {
  entry: './selector.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',  // 当在控制台输出内容时 会具体显示是哪个文件的哪一行输出的
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'}
    ]
  }
}