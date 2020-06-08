"use strict"

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    // req. files to watch
    var files = [
        "./*.html",
        "./css/*.css",
        "./js/*.js",
        "./images/**.{png, jpg, gif}/img/*.{png, jpg, gif}"
    ];

    gulp.watch("./css/*.scss", ['sass']);
    gulp.watch(files).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./css/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);