"use strict";

var paths = {
  scripts: [
    'bower_components/bootstrap/dist/js/*.js', '!bower_components/bootstrap/dist/js/*.min.js',
    'bower_components/jquery/dist/*.js', '!bower_components/jquery/dist/*.min.js',
    'bower_components/lodash/dist/*.js', '!bower_components/lodash/dist/*.min.js'
  ],
  images: [''],
  styles: ['']
};

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

//rename
//var rename = require('gulp-rename');
//css minify
//var cssmin = require('gulp-cssmin');
//js minify
//var uglify = require('gulp-uglify');
//del
var del = require('del');

//clean
gulp.task('clean', function(callback) {
  del(['dist'], callback);
});

// https://github.com/chilijung/gulp-cssmin/
gulp.task('styles', function() {
  return gulp.src(paths.styles)
    .pipe($.cssmin())
    // min
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});

//js minify
gulp.task('scripts', function() {
  console.log('start scripts');
  return gulp.src(paths.scripts)
    .pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

//images
gulp.task('images', function() {
  console.log('TODO images', paths.images);
});

gulp.task('default', ['clean','scripts', 'styles', 'images']);
