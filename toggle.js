let sidebar = document.querySelector(".sidebar");
let toggle = document.querySelector(".sidebar-toggle");

toggle.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
