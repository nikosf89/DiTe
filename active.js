window.onload = function () {
  let navLinks = document
    .getElementById("navigation")
    .getElementsByTagName("a");

  // Get the filename from the URL
  let currentPage = document.URL.split("/").pop();

  for (let i = 0; i < navLinks.length; i++) {
    // Get the filename from the href attribute
    let hrefPage = navLinks[i].href.split("/").pop();

    if (hrefPage == currentPage) {
      navLinks[i].className += " active";
    }
  }
};
