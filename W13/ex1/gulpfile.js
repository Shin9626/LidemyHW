const { src, dest, parallel } = require('gulp')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const rename = require("gulp-rename")
const cleanCSS = require('gulp-clean-css')

function CompileJS() {
    return src('src/*.js')
        .pipe(babel())
        .pipe(dest('dist'))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(dest('dist'))
}

function CompileCSS() {
    return src('src/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({extname:'.min.css'}))
        .pipe(dest('./css'));
}

exports.default = parallel(CompileJS, CompileCSS)