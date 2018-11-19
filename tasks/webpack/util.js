var glob = require("glob");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var config = require("./config");

exports.getJsEntry = function() {
  var entries = glob.sync(path.join(config.srcDir, "pages/*/*.js"));
  var entry = {};
  var reg = /\/(pages\/[^\/]+)\/.+\.js/;
  entries.forEach(function(filepath, index) {
    var match = filepath.match(reg);
    if (match) {
      entry[match[1]] = filepath;
    }
  });
  return entry;
};

exports.getHtmlPlugin = function() {
  var pages = glob.sync(path.join(config.srcDir, "template/pages/*/*.jade"));
  var plugins = [];
  var reg = /\/(pages\/[^\/]+)\/.+\.jade/;
  pages.forEach(function(pagepath, index) {
    var match = pagepath.match(reg);
    if (match) {
      var plugin = new HtmlWebpackPlugin({
        template: pagepath,
        filename: path.join(config.viewDistDir, match[1], ".jade"), // 通过名字修改输出路径
        chunks: ["pages/common", match[1]],
        inject: false // 如果要自定义，必须要设置为false
      });
      plugins.push(plugin);
    }
  });
  return plugins;
};
