"Use strict";

{
const accordionToggle = document.querySelector(".history__transaction");
const accordionHide = document.querySelector(".history__hide");

accordionToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  accordionHide.classList.toggle("history__hide");
});
}
