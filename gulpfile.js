"use strict";

const { src, dest, watch } = require("gulp");
const stylelint = require("gulp-stylelint");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

function lint() {
  return src("source/**/*.css")
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
  watch("source/**/*.css").on("change", reload);
  watch("source/*.html").on("change", reload);
};

exports.lint = lint;
exports.server = server;