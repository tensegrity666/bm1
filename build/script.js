"Use strict";

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("onoffswitch")) {
    event.target.classList.toggle("onoffswitch_checked");

    const theme = document.querySelectorAll(".theme");

    for (let i = 0; i < theme.length; ++i) {
      if (theme[i].classList.contains("theme_color_project-inverse")) {
        theme[i].classList.toggle("theme_color_project-inverse")
        theme[i].classList.add("theme_color_project-default")
      }
      else if (theme[i].classList.contains("theme_color_project-brand")) {
        theme[i].classList.remove("theme_color_project-inverse")
        theme[i].classList.remove("theme_color_project-default")
      }
      else
        theme[i].classList.toggle("theme_color_project-inverse");
    };

    if (this.classList.contains("theme", "theme_color_project-inverse"))
      this.classList.remove("theme", "theme_color_project-inverse")
    else
      this.classList.add("theme", "theme_color_project-inverse");
  };

  if (event.target.classList.contains("history"))
    event.target.classList.toggle("history__hide");
});
