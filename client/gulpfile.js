var postcss = require('gulp-postcss');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const magicAnimations = require('postcss-magic-animations');
const nested = require('postcss-nested');


gulp.task('serve', ['css'], function(){
    gulp.watch('./public/pages/contact.css', ['css']);
});

gulp.task('css', function(){
    var plugin = [
        autoprefixer(),
        magicAnimations(),
        nested()
    ];
    return gulp.src('./public/pages/contact.css')
        .pipe(postcss(plugin))
        .pipe(gulp.dest('./dest'));
})

gulp.task('default', ['serve']);