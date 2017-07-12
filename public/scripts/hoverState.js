$(document).ready(function(){
  $('article').hover(
    function() {
      console.log("yo");
      $(this).addClass('hoverState');
    },
    function() {
      $(this).removeClass('hoverState');
    }
  );
});