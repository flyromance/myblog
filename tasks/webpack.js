const gulp = require("gulp");
const webpack = require("webpack");

function getWebpackConfig(env) {
  let webpackConfig;
  switch (env) {
    case "production":
      webpackConfig = require("./webpack/webpack.prod");
      break;
    case "development":
    default:
      webpackConfig = require("./webpack/webpack.dev");
      break;
  }

  return webpackConfig;
}

module.exports.build = function(config) {
  const _config = getWebpackConfig(config.env);

  return function webpackTask(cb) {
    // 如果传了回调函数，自动执行编译
    // const compiler = webpack(_config, (err, stats) => {
    //   if (err || stats.hasErrors()) {
    //     // 在这里处理错误
    //   }
    // });

    const compiler = webpack(_config);

    compiler.run(function(err, stats) {
      if (err || stats.hasErrors()) {
        // 在这里处理错误
        return;
      }
    });
    cb && cb();

    // const watching = compiler.watch(
    //   {
    //     // watchOptions 示例
    //     aggregateTimeout: 300,
    //     poll: undefined
    //   },
    //   (err, stats) => {
    //     // 在这里打印 watch/build 结果...
    //     console.log(stats);
    //   }
    // );
  };
};

module.exports.watch = function(config) {
  const _config = getWebpackConfig(config.env);
  const compiler = webpack(_config);

  const watching = compiler.watch(
    {
      // watchOptions 示例
      aggregateTimeout: 300,
      poll: undefined
    },
    (err, stats) => {
      // 在这里打印 watch/build 结果...
      console.log(stats);
    }
  );
};
