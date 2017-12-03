var gulp = require('gulp');
var config = require('./build/config');
var path = require('path');
var del = require('del');

var filepath = {
    view: path.join(config.viewSrcDir, 'module/**/*.jade')
}

gulp.task('del:view', function () {
    // 文件夹都删掉 module  module/ module/** 
    // 
    del.sync('./views/module/**/*') 
})

gulp.task('build:view', function () {
    gulp.src(filepath.view)
        .pipe(gulp.dest('./views/module'))
})

gulp.task('watch:view', ['del:view', 'build:view'], function () {
    gulp.watch(filepath.view, ['build:view'])
})
