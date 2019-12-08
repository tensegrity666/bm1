"Use strict";

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
