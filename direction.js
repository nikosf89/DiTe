document
  .getElementById("strata-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("mobile-navigation").classList.add("hidden");
    document.getElementById("close").classList.add("hidden");
    document.getElementById("open").classList.remove("hidden");
    location.href = this.href;
  });

document
  .getElementById("logo-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("mobile-navigation").classList.add("hidden");
    document.getElementById("close").classList.add("hidden");
    document.getElementById("open").classList.remove("hidden");
    location.href = this.href;
  });

document
  .getElementById("erga-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("mobile-navigation").classList.add("hidden");
    document.getElementById("close").classList.add("hidden");
    document.getElementById("open").classList.remove("hidden");
    location.href = this.href;
  });
