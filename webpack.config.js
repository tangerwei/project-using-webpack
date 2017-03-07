var webpack = require('webpack');
var path = require('path');
var commonPlugin = new webpack.optimize.CommonsChunkPlugin("common");
var config = {
  plugins:[commonPlugin],
  entry: {
    app: path.resolve(__dirname,'lib/app.js'),
    main: path.resolve(__dirname,'lib/main.js'),
    index: path.resolve(__dirname,'lib/index.js'),
  },
  //其他配置
  output:{
    filename:'[name].js',
    path: path.resolve(__dirname,'build'),
  },
  resolve:{
    extensions:['.js','.jsx']
  },
  module:{
    loaders:[{
      test:/\.js$/,
      exclude:/node_modules/,
      loader:'babel-loader'
    },{
      test:/\.scss$/,
      loader:'style!css!sass'
    }]
  }

};
module.exports = config;