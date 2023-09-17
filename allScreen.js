$(document).ready(function () {
  $("#toggle-menu-button").click(function () {
    if ($("#mobile-navigation").hasClass("open")) {
      $("#mobile-navigation").removeClass("open");
      $("#mobile-navigation").css({ width: "auto", height: "auto" });
    } else {
      $("#mobile-navigation").addClass("open");
      $("#mobile-navigation").css({ width: "100vw", height: "100vh" });
    }
  });
});
