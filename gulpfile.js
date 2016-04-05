var gulp = require("gulp");
//var browserify=require('browserify');
//var source=require('vinyl-source-stream');
var sass=require('gulp-sass');


gulp.task('sass',function(){
  return gulp.src('./public/style/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public'));
});

gulp.task('watch',function(){
  gulp.watch('./public/style/*.scss',['sass']);
});

gulp.task('default',['sass','watch']);
