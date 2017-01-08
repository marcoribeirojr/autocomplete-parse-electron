'use strict'

const gulp = require('gulp');
const minifycss = require('gulp-minify-css');
const notify = require('gulp-notify');
const uglify = require('gulp-uglifyjs');

gulp.task('Minificar CSS', () => {
  gulp.src('./css/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('./public/css'))
    .pipe(notify('Minificado o CSS!'));
});

gulp.task('default', ['Minificar CSS']);
