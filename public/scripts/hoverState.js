$(document).ready(function(){
  // $('#tweetList .tweet').hover(
  //   function() {
  //     $(this).addClass('hoverState');
  //   },
  //   function() {
  //     $(this).removeClass('hoverState');
  //   }
  // );
  $('#tweetList').on('mouseEnter', '.tweet' , function() {
    console.log('hay!');
  })
});