// gulp 3.9.1
/*
 * 老版本的gulp 3.9.1
 * 想要控制顺序执行，只能通过依赖的写法，但是依赖中可能有多个任务，我也想让他安装顺序执行，这就蛋疼了
 * 但是依赖中的任务都是异步的，
 * ！！！可以通过gulp-sequence
 *
 * 新版本的gulp就可以通过parallel(并行) 与 series(串行)，很方便的控制顺序
 *
 */
const path = require("path");
const gulp = require("gulp");
const gulpSequence = require("gulp-sequence");
const config = require("./config");

// hack module._findPath;
const setAlias = require("./lib/alias");
setAlias(config.paths);

const taskCreators = {
  del: require("./tasks/del"),
  copy: require("./tasks/copy"),
  webpackBuild: require("./tasks/webpack").build,
  webpackWatch: require("./tasks/webpack").watch,
  server: require("./tasks/server")
};

gulp.task("del:template", function(cb) {
  taskCreators.del(config.template.dest)(cb);
});

gulp.task("del:asset", function(cb) {
  taskCreators.del(config.asset.dest)(cb);
});

gulp.task("del:webpack", function(cb) {
  taskCreators.del(config.webpack.dest)(cb);
});

gulp.task("del", ["del:template", "del:asset", "del:webpack"], function(cb) {
  console.log("del all");
  cb();
});

gulp.task("asset", function() {
  return taskCreators.copy(config.asset)();
});

gulp.task("template", function() {
  return taskCreators.copy(config.template)();
});

gulp.task("webpack", function() {
  return taskCreators.webpackBuild(config)();
});

// 串行
gulp.task("build", gulpSequence("template", "asset", "webpack"));

// 并行 两种方式
// gulp.task("build", gulpSequence(["template", "asset", "webpack"]));
// gulp.task("build", ["template", "asset", "webpack"]);

gulp.task("watch", function(cb) {
  gulp.watch([config.asset.src.patterns], {}, ["asset"]);
  gulp.watch([config.template.src.patterns], {}, ["template"]);
  taskCreators.webpackWatch(config);
});

gulp.task("dev", gulpSequence("del", "build", "watch"));

gulp.task("server", function(cb) {
  taskCreators.build(config)(cb);
});

gulp.task("start", ["del"], function() {
  gulp.start("build");
});
