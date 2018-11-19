const gulp = require("gulp");

module.exports = function(config = {}) {
  return function() {
    return gulp
      .src(config.src.patterns || [], config.src.options || {})
      .pipe(gulp.dest(config.dest.dir));
  };
};
