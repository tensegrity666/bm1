"use strict";

const { src, dest, watch } = require("gulp");
const stylelint = require("gulp-stylelint");
const browserSync = require("browser-sync").create();
const gulpConcat = require("gulp-concat");
const reload = browserSync.reload;

function lint() {
  return src("source/common.blocks/*.css")
    .pipe(stylelint({
      reporters: [{ formatter: 'string', console: true }]
    }));
};

function concat() {
  return src("source/common.blocks/**/*.css")
    .pipe(gulpConcat("main.css"))
    .pipe(dest("build/"));
};

function server() {
  browserSync.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  watch("source/common.blocks/*.css", concat);
  watch("build/*.html").on("change", reload);
};

exports.lint = lint;
exports.concat = concat;
exports.server = server;