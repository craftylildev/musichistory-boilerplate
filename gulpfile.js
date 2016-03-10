var gulp = require('gulp');
    var jshint = require('gulp-jshint');
    var watch = require('gulp-watch');
    var sass = require('gulp-sass');
    // var Firebase = require("firebase");    
    gulp.task('default', ['lint', 'watch', 'sassify']);

    gulp.task('watch', function() {
      gulp.watch('./js/*.js', ['lint']);
      gulp.watch('./sass/*.scss', ['sassify']); 
    });

    gulp.task('lint', function() {
      return gulp.src('./js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
    });

    gulp.task('sassify', function () {
      return gulp.src('./sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});