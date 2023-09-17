let link = document.querySelector("#projects-link");

// Add a click event listener
link.addEventListener("click", function (event) {
  // Prevent the default action
  event.preventDefault();

  // Load the home page content
  fetch("index.html")
    .then((response) => response.text())
    .then((html) => {
      // Replace the current page content with the home page content
      document.body.innerHTML = html;

      // Scroll to the projects section
      let projectsSection = document.querySelector("#ourWork");
      projectsSection.scrollIntoView();

      // Change the URL in the address bar
      history.pushState({}, "", "index.html");
    });
});
