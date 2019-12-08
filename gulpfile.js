"use strict";

const { src, dest, watch } = require("gulp");
const stylelint = require("gulp-stylelint");
const browserSync = require("browser-sync").create();
const gulpConcat = require("gulp-concat");

function style() {
  return src("source/common.blocks/**/*.css")
    .pipe(gulpConcat("main.css"))
    .pipe(dest("build/"))
    .pipe(browserSync.stream());
};

function script() {
  return src("source/scripts/*.js")
    .pipe(gulpConcat("main.js"))
    .pipe(dest("build/"))
    .pipe(browserSync.stream());
};

function server() {
  browserSync.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  watch("source/common.blocks/**/*.css", style);
  watch("*.html").on("change", browserSync.reload);
};

exports.style = style;
exports.script = script;
exports.server = server;
