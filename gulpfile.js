var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    minify = require('gulp-cssnano'),
    paths = {
      sassDir: './src/sass/',
      dist: './www/',
      sass: '**/*.scss'
    };
 
 gulp.task('sass', function(){
   gulp.src(paths.sassDir + paths.sass)
    .pipe(sass())
    .pipe(minify())
    .pipe(gulp.dest(paths.dist))
 })
 
 gulp.task('watch', function(){
   gulp.watch(paths.sassDir + paths.sass, ['sass']);
 })
 
 gulp.task('default', ['sass', 'watch']);
