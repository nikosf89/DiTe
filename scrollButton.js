function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const scrollTopButton = document.getElementById("scrollTopButton");

scrollTopButton.addEventListener("click", (event) => {
  event.stopPropagation();
  scrollTop();
});

window.onscroll = function () {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    scrollTopButton.classList.remove("hidden");
  } else {
    scrollTopButton.classList.add("hidden");
  }
};
