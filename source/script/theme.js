'Use strict';

  const  = document.querySelector('_cheked');
  const themeInvert = document.querySelector('.theme');

theme.addEventListener('click', function (evt) {
  evt.preventDefault();
  themeInvert.classList.add('theme_color_project-invert');
  theme.classList.remove('onoffswitch_cheked');
  });


{
  const themeToggle = document.querySelector(".onoffswitch");
  const themeInvert = document.querySelector(".theme");

  themeToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    themeInvert.classList.add("theme_color_project-invert");
  });
}
