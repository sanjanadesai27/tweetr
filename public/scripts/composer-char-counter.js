$(document).ready(function(){
  $("textarea").on("keyup", function(){
    var counter = 140 - $(this).val().length;
    $(this).siblings('span').html(counter);
    if (counter < 0) {
      $(this).siblings('.counter').css('color','red');
    } else if(counter > 0) {
      $(this).siblings('.counter').css('color','');
    }
  });
});
