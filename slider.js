document.addEventListener("DOMContentLoaded", function () {
  let slider = document.querySelector(".slider");
  let slides = Array.from(slider.children);
  let nextButton = document.querySelector(".next");
  let prevButton = document.querySelector(".prev");
  let slideIndex = 0;

  function updateSlidePosition() {
    for (var slide of slides) {
      slide.style.transform = "translateX(" + -slideIndex * 100 + "%)";
    }
  }

  nextButton.addEventListener("click", function () {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlidePosition();
  });

  prevButton.addEventListener("click", function () {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  });
});
