const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('transpile', () =>
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', gulp.series('transpile'));
});
