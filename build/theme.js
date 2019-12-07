'Use strict';
{
const themeToggle = document.querySelector(".onoffswitch");
const themeInverse = document.querySelector(".theme");
const page = document.querySelector("html");

themeToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  themeToggle.classList.toggle("onoffswitch_checked");
  themeInverse.classList.toggle("theme_color_project-inverse");
  if (page.hasAttribute("style"))
    page.removeAttribute("style");
  else
    page.setAttribute("style", "background-color: #000; transition: background-color 0.1s ease-in-out");
});
}
