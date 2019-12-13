"use strict";

const { src, dest, watch } = require("gulp");
const stylelint = require("gulp-stylelint");
const browserSync = require("browser-sync").create();
const gulpConcat = require("gulp-concat");

function lint() {
  return src("common.blocks/**/*.css")
    .pipe(stylelint({
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }));
};

function style() {
  return src("common.blocks/**/*.css")
    .pipe(gulpConcat("style.css"))
    .pipe(dest("build/"))
    .pipe(browserSync.stream());
};

function script() {
  return src("common.blocks/**/*.js")
    .pipe(gulpConcat("script.js"))
    .pipe(dest("build/"))
    .pipe(browserSync.stream());
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
