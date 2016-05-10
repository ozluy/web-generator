var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var server = require('gulp-express');
var pug = require('gulp-jade');
var imagemin = require('gulp-image');
var copy = require('gulp-contrib-copy');

var paths = {
  port:1453,
  partials: './dev/views/shared/*.jade',
  scripts: ['./dev/assets/scripts/common.js'],
  styles:'./dev/assets/styles/*.scss',
  html:'./dist/*.html',
  templates:'./dev/views/*.jade',
  images:'./dev/assets/images/*.*',
  copy:['./dev/favicon.ico'],
};
gulp.task('clean', function() {
  return del.sync(['dist/**/*']);//Clean must be sync to avoid from errors
});

gulp.task('connect', function() {
  connect.server({
    root:'./dist',
    livereload: true,
    port:paths.port
  });
});

gulp.task('copy',['clean'], function() {
  gulp.src(paths.copy)
  .pipe(copy())
  .pipe(gulp.dest('dist'));
});
gulp.task('images', function () {
  gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('html', function () {
  gulp.src(paths.html)
  .pipe(connect.reload())
});

gulp.task('partials', function() {
  return gulp.src(paths.partials)
  .pipe(pug())
  .pipe(connect.reload());
});

gulp.task('templates', function() {
  return gulp.src(paths.templates)
  .pipe(pug({ pretty: true })) // do this while developing
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
  //.pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(concat('bundle.min.js'))
  //.pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/assets/js'))
  .pipe(connect.reload());
});

gulp.task('styles', function() {
  return gulp.src(paths.styles)
  //.pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(concat('bundle.min.css'))
  //.pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/assets/css'))
  .pipe(connect.reload());
});

gulp.task('watch', function() {
  console.log('************************* Gulp watching changes! *************************')
  gulp.watch(paths.scripts, ['scripts'], server.notify);
  gulp.watch(paths.styles, ['styles'], server.notify);
  gulp.watch(paths.partials, ['templates', 'partials'], server.notify);
  gulp.watch(paths.templates, ['templates'], server.notify);
  gulp.watch(paths.html, ['html'], server.notify);
});

gulp.task('default', ['clean','copy','images','styles', 'scripts','partials', 'templates', 'watch', 'connect']);
