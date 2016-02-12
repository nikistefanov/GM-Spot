var gulp = require('gulp'),
  sassLint = require('gulp-sass-lint'),
  sass = require('gulp-ruby-sass');

gulp.task('default', function() {

});

gulp.task('styles', function() {
  return gulp.src('css/site.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass('css/site.scss', {
      style: 'expanded'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({
      message: 'Styles task complete'
    }));
});
