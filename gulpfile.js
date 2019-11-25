"use strict";

const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const beeper = require("beeper");
const stylelint = require("gulp-stylelint");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

function style() {
  return src("source/sass/style.scss")
    .pipe(plumber(errorHandler))
    .pipe(sass({
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(dest("source/css"))
    .pipe(browserSync.stream());
};

function errorHandler(error) {
  beeper();
  return true;
}

function lint() {
  return src("source/sass/**/*.scss")
    .pipe(stylelint({
      reporters: [{ formatter: 'string', console: true }]
    }))
};

function server() {
  browserSync.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  watch("source/sass/**/*.scss", style);
  watch("source/*.html").on("change", reload);
};

exports.style = style;
exports.lint = lint;
exports.server = server;