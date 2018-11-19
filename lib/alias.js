let { Module } = require("module");
let path = require("path");

const _findPath = Module._findPath;

function setAlias(configPath) {
  Module._findPath = function(request, paths, isMain) {
    if (request.startsWith("@")) {
      // @components   @components/header 两种情况
      let index = request.indexOf("/");
      let prefix, res;

      if (index > -1) {
        prefix = request.slice(1, index);
        res = request.slice(index + 1);
      } else {
        prefix = request.slice(1, request.length);
        res = "";
      }

      let prefixPath = configPath[prefix];
      if (prefixPath) {
        request = path.join(prefixPath, res);
      }
    }
    return _findPath(request, paths, isMain);
  };
}

module.exports = setAlias;
