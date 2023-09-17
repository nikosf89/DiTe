// Identify the logo link
let logoLink = document.querySelector("#logo-link");

// Add a click event listener to the logo link
logoLink.addEventListener("click", function (event) {
  // Prevent the default action
  event.preventDefault();

  // Load the home page content
  fetch("index.html")
    .then((response) => response.text())
    .then((html) => {
      // Replace the current page content with the home page content
      document.body.innerHTML = html;

      // Scroll to the logo section
      let logoSection = document.querySelector("#uniqueSection");
      logoSection.scrollIntoView({ behavior: "auto", block: "start" });

      // Change the URL in the address bar
      history.pushState({}, "", "index.html");
    });
});
