// Identify the strata link
let strataLink = document.querySelector("#strata-link");

// Add a click event listener to the strata link
strataLink.addEventListener("click", function (event) {
  // Prevent the default action
  event.preventDefault();

  // Load the home page content
  fetch("index.html")
    .then((response) => response.text())
    .then((html) => {
      // Replace the current page content with the home page content
      document.body.innerHTML = html;

      // Scroll to the strata section
      let strataSection = document.querySelector("#strataSection");
      strataSection.scrollIntoView({ behavior: "auto", block: "start" });

      // Change the URL in the address bar
      history.pushState({}, "", "index.html");
    });
});
