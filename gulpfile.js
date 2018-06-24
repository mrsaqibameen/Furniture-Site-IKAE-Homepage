const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer'); // Autoprefixer gulp plugin.
const cleanCSS = require('gulp-clean-css'); // Minify it as well.

// Gulp task to autoprefix the css properties. 
gulp.task('styles', () => {
    gulp.src('./src/css/style.css') // Source file.
        .pipe(autoprefixer()) // Pipe the prefixer.
        .pipe(cleanCSS({ // Minify it as well.
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('build')); // Finally build.
});

// Gulp watch task to autoload css.
gulp.task('watcher', () => {
    // Watch for cahnges in style.css and run `styles` task upon change.
    gulp.watch('./src/css/style.css', ['styles']);
})