const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const webpack = require('gulp-webpack');

gulp.task('build', () => 
    gulp.src('src/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('lint', () => 
    gulp.src(['src/**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
);

gulp.task('webpack', () => 
    gulp.src('src/index.js')
        .pipe(webpack({
            mode: 'production',
            output: {
                filename: 'bundle.js'
            }
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('watch', () => {
    gulp.watch('src/**/*.js', gulp.series('lint', 'build', 'webpack'));
});
