var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp
    .src('./src/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/dist/'))
    .on('end', function () {
      console.log('Sass compiled sucessfully!');
    });
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.scss', gulp.series('sass')).on('change', function () {
    console.log('File(s) changed. Recompiling...');
  });
});
