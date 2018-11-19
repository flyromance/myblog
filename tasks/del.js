const del = require("del");

module.exports = function(config) {
  return function delTask(cb) {
    let delFilepaths = del.sync(config.patterns, { ...config.options });
    cb && cb();
  };
};
