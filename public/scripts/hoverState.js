$(document).ready(function(){
  $('article').hover(
    function() {
      $(this).addClass('hoverState');
    },
    function() {
      $(this).removeClass('hoverState');
    }
    );
});