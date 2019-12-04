'Use strict';

  const theme = document.querySelector('.onoffswitch_cheked');
  const themeInvert = document.querySelector('.theme');

theme.addEventListener('click', function (evt) {
  evt.preventDefault();
  themeInvert.classList.add('theme_color_project-invert');
  theme.classList.remove('onoffswitch_cheked');
  });
