$(document).ready(function(){
  $('.new-tweet').hide();
  $('.composer').on('click', function(){
    //alert("something happened!!");
    $(".new-tweet").slideToggle("slow", function(){
      $("#text").select();
    });
  });
});