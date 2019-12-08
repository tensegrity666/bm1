'Use strict';
{
  const themeToggle = document.querySelector(".onoffswitch");
  const themeInverse = document.querySelectorAll(".theme");
  const page = document.querySelector("html");

  themeToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    themeToggle.classList.toggle("onoffswitch_checked");

    for (let i = 0; i < themeInverse.length; i++) {
      themeInverse[i].classList.toggle("theme_color_project-inverse");
    }

    if (page.hasAttribute("style"))
      page.removeAttribute("style");
    else
      page.setAttribute("style", "background-color: #000; transition: background-color 0.1s ease-in-out");
  });
}

{
  const accordionToggle = document.querySelectorAll(".history__transaction");
  const accordionHide = document.querySelectorAll(".history__hide");

  for (let i = 0; i < accordionToggle.length; ++i) {
    accordionToggle[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      accordionHide[i].classList.toggle("history__hide");
    });
  }
}