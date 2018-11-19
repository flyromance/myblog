var gulp = require('gulp');
var config = require('./build/config');
var path = require('path');
var del = require('del');

var filepath = {
    view: {
        src: path.join(config.srcDir, 'view_modules/**/*.jade'),
        dist: path.join(config.viewDir, 'view_modules'),
    },
    asset: {
        dist: config.distDir,
    }
}

gulp.task('del:asset', function () {
    del.sync(filepath.asset.dist)
})

gulp.task('del:view', function () {
    // 文件夹都删掉 module  module/  module/** 
    // 文件夹保留 module/**/*
    del.sync(filepath.view.dist)
})

gulp.task('build:view', function () {
    gulp.src(filepath.view.src)
        .pipe(gulp.dest('./views/view_modules'))
})

gulp.task('watch:view', ['del:view', 'build:view'], function () {
    gulp.watch(filepath.view.src, ['build:view'])
})


gulp.task('del', ['del:view', 'del:asset'])

gulp.task('dev', ['del', 'watch:view'])

gulp.task('build', ['del', 'build:view'])
