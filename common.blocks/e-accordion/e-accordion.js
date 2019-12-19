document.body.addEventListener("click", function (event) {
  let accordionEvent = event.target.closest(".history__transaction");
  if (accordionEvent) {
    let accordionHide = accordionEvent.children;
    accordionHide[1].classList.toggle("history__hide"); //modificator history__hide always has index 1
  };
});
