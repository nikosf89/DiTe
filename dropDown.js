$(document).ready(function () {
  $(".dropdown-toggle").click(function () {
    $(this).next(".submenu").toggleClass("opacity-100 opacity-0");
    return false;
  });
  $(document).click(function () {
    $(".submenu").removeClass("opacity-100").addClass("opacity-0");
  });
});
