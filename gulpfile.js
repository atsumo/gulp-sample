"use strict";

var gulp = require('gulp');
//rename
var rename = require('gulp-rename');
//css minify
var cssmin = require('gulp-cssmin');
//js minify
var uglify = require('gulp-uglify');

// https://github.com/chilijung/gulp-cssmin/
gulp.task('css', function() {
  gulp.src('src/**/*.css')
    .pipe(cssmin())
    // min
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});

//js minify
gulp.task('compress', function() {
  gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
});

