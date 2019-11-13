const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const connect = require('gulp-connect');
// const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('copy-html', () => {
    gulp.src('./*.html')
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload())
});

// gulp.task('copy-css', () => {
//     gulp.src('css/**/*')
//         .pipe(concat('main.css'))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(minifyCss())
//         .pipe(rename('main.min.css'))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(connect.reload())
// });

gulp.task('copy-js', () => {
    gulp.src('js/**/*')
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload())
});

gulp.task('copy-data', () => {
    gulp.src('data/**/*')
        .pipe(gulp.dest('dist/data'))
        .pipe(connect.reload())
});

// 图片、第三方的库文件（bootstrap.css、bootstrap.js、jquery.js）
gulp.task('copy-assets', () => {
    gulp.src('assets/**/*')
        .pipe(gulp.dest('dist/assets'))
        .pipe(connect.reload())
});

// 处理scss文件

gulp.task('scss2css', () => {
    gulp.src('scss/**/*')
        .pipe(concat('main.scss')) // 合并scss文件
        .pipe(sass()) // 转为css文件
        .pipe(gulp.dest('dist/css'))
        .pipe(minifyCss())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload())
});


gulp.task('watch', () => {
    gulp.watch('*.html', ['copy-html']);
    gulp.watch('css/**/*', ['copy-css']);
    gulp.watch('js/**/*', ['copy-js']);
    gulp.watch('data/**/*', ['copy-data']);
    gulp.watch('assets/**/*', ['copy-assets']);
    gulp.watch('scss/**/*', ['scss2css']);
});

gulp.task('build', ['copy-html',  'copy-js', 'copy-data', 'copy-assets', 'scss2css'], () => {
    console.log('success')
});

gulp.task('server', () => {
    connect.server({
        // host:'0.0.0.0',
        port:8081,
        root: 'dist',
        livereload: true
    })
});

gulp.task('default', ['build', 'server', 'watch'])
