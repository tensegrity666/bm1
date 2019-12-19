"use strict";

const { src, dest, watch } = require("gulp");
const stylelint = require("gulp-stylelint");
const browserSync = require("browser-sync").create();
const gulpConcat = require("gulp-concat");
const csso = require("gulp-csso");
const uglify = require("gulp-uglify-es").default;

function lint() {
  return src("source/common.blocks/**/*.css")
    .pipe(stylelint({
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }));
};

function style() {
  return src("source/common.blocks/**/*.css")
    .pipe(gulpConcat("style.css"))
    .pipe(csso())
    .pipe(dest("build/"))
    .pipe(browserSync.stream());
};

function script() {
  return src("build/*.js")
    .pipe(uglify())
    .pipe(dest("build/"))
};

function server() {
  browserSync.init({
    server: "./",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  watch("common.blocks/**/*.css", style);
  watch("*.html").on("change", browserSync.reload);
};

exports.lint = lint;
exports.style = style;
exports.script = script;
exports.server = server;
