$(document).ready(function() {

  $("textarea").on("keyup", function() {
    var remChars = 140 - $(this).val().length;
    var counter = $(this).siblings('.counter');
    counter.html(remChars);
    if (remChars < 1) {
      counter.addClass("invalid");
    } else if (remChars > 0) {
      counter.removeClass("invalid");
    }
  });
});
