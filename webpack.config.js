var webpack = require('webpack');
var path = require('path');
var commonPlugin = new webpack.optimize.CommonsChunkPlugin("common");
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({
  output: {
    comments: false,  // remove all comments
  },
  compress: {
    warnings: false
  }
})
var config = {
  plugins: [commonPlugin,uglifyPlugin],
  entry: {
    app: path.resolve(__dirname, 'lib/app.js'),
    main: path.resolve(__dirname, 'lib/main.js'),
    index: path.resolve(__dirname, 'lib/index.js'),
  },
  //其他配置//[name].[hash].js
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias:{
      'react':path.join(__dirname,'node_modules/react/react.js'),
      'react-dom':path.join(__dirname,'node_modules/react-dom/dist/react-dom.js')
    }
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }

};
module.exports = config;