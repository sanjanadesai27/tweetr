$(document).ready(function(){
  $('#tweetList').hover(
    function() {
      $(this).addClass('hoverState');
    },
    function() {
      $(this).removeClass('hoverState');
    }
    );
});