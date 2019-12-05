"Use strict";

const accordionTitle = document.getElementsByClassName("history__show");
const accordionBody = document.getElementsByClassName("e-accordion__more");

for (let i = 0; i < accordionTitle.length; ++i) {
  accordionTitle[i].addEventListener("click", function() {
    if (this.classList.contains("history__hide")) {
      for (const i = 0; i < accordionTitle.length; ++i) {
        accordionTitle[i].classList.remove("history__hide");
      }
      this.classList.add("history__hide");
    }
  });
}
