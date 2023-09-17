let button = document.querySelector("#toggle-menu-button");
let menu = document.querySelector("#mobile-navigation");
let open = document.querySelector("#open");
let close = document.querySelector("#close");

button.addEventListener("click", (e) => {
  menu.classList.toggle("hidden");
  open.classList.toggle("hidden");
  close.classList.toggle("hidden");
  close.classList.toggle("rotate-180");
});
