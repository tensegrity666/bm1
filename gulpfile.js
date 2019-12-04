"use strict";

const { src, dest, watch } = require("gulp");
const stylelint = require("gulp-stylelint");
const browserSync = require("browser-sync").create();
const gulpConcat = require("gulp-concat");

function concat() {
  return src("source/common.blocks/**/*.css")
    .pipe(gulpConcat("main.css"))
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
  watch("source/common.blocks/**/*.css", concat);
  watch("*.html").on("change", browserSync.reload);
};

exports.concat = concat;
exports.server = server;
