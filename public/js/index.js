$(document).ready(function() {

  var clicked = true;
  var clicked2= true;
  $(".hidden").slideUp(0);
  $(".shown:eq(1)").css("margin-top", "3%");

  $(".carousel-inner img").css("height", "500px");


  $(".shown:first").click(function() {
    if (clicked) {

      $(".hidden:first").slideDown();
      clicked = false;
    } else {

      $(".hidden:first").slideUp();
      clicked = true;
    }
  });

  $(".shown:eq(1)").click(function() {
    if (clicked2) {

      $(".hidden:eq(1)").slideDown();

      clicked2 = false;
    } else {

      $(".hidden:eq(1)").slideUp();
      clicked2 = true;
    }
  });
});
