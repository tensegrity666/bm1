"Use strict";

document.body.onload = function () {
  const themeToggle = document.querySelector(".onoffswitch");

  themeToggle.onclick = function () {
    const theme = document.querySelectorAll(".theme");
    const body = document.querySelector("body");

    themeToggle.classList.toggle("onoffswitch_checked");

    for (let i = 0; i < theme.length; ++i) {
      if (theme[i].classList.contains("theme_color_project-inverse")) {
        theme[i].classList.toggle("theme_color_project-inverse")
        theme[i].classList.add("theme_color_project-default")
      } else if (theme[i].classList.contains("theme_color_project-brand")) {
        theme[i].classList.remove("theme_color_project-inverse")
        theme[i].classList.remove("theme_color_project-default")
      } else
        theme[i].classList.toggle("theme_color_project-inverse");
    };

    if (body.classList.contains("theme", "theme_color_project-inverse"))
      body.classList.remove("theme", "theme_color_project-inverse")
    else
      body.classList.add("theme", "theme_color_project-inverse");
  };

  const accordionToggle = document.querySelectorAll(".history__transaction");
  const accordionHide = document.querySelectorAll(".history__hide");

  for (let i = 0; i < accordionToggle.length; ++i) {
    accordionToggle[i].onclick = (function (evt) {
      evt.preventDefault();
        accordionHide[i].classList.toggle("history__hide");
    });
  };
}
