var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var UglifyJS = require("uglify-js");
console.log("----------给个机会老大！！");
var entry = {};
var bannerExcludeFiles = [];

function walk(dir) {
  dir = dir || '.'
  var directory = path.join(__dirname, '../official_doc', dir);
  fs.readdirSync(directory)
    .forEach(function(file) {
      var fullpath = path.join(directory, file);
      var stat = fs.statSync(fullpath);
      var extname = path.extname(fullpath);
      if (stat.isFile() && (extname === '.we' || extname === '.vue')) {
        var name = path.join('official_doc', 'build', dir, path.basename(file, extname));
        entry[name] = fullpath + '?entry=true';
        if (extname === '.we') {
            bannerExcludeFiles.push(name + '.js');
        }
      } else if (stat.isDirectory() && file !== 'build' && file !== 'include') {
        var subdir = path.join(dir, file);
        console.log("subdir",subdir);
        walk(subdir);
      }
    });
}

walk();

var banner = '// { "framework": "Vue" }\n'

var bannerPlugin = new webpack.BannerPlugin(banner, {
  raw: true,
  exclude: bannerExcludeFiles
})

var uglfyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress:{
        warnings: false //压缩警告
    },
    mangle:false //是否混淆压缩
})

module.exports = {
  entry: entry,
  output : {
    path: '.',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(we|vue)(\?[^?]+)?$/,
        loader: 'weex'
      }
    ]
  },
  plugins: [
      bannerPlugin,
      uglfyJsPlugin
  ]
}
