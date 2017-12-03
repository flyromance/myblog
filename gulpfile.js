var gulp = require('gulp');
var config = require('./build/config');
var path = require('path');
var del = require('del');

var filepath = {
    view: {
        src: path.join(config.viewSrcDir, 'module/**/*.jade'),
        dist: './views/module',
    },
    js: {

    },
    css: {
        
    }
}

gulp.task('del:view', function () {
    // 文件夹都删掉 module  module/  module/** 
    // 文件夹保留 module/**/*
    del.sync(filepath.view.dist)
})

gulp.task('build:view', function () {
    gulp.src(filepath.view.src)
        .pipe(gulp.dest('./views/module'))
})

gulp.task('watch:view', ['del:view', 'build:view'], function () {
    gulp.watch(filepath.view.src, ['build:view'])
})
