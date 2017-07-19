$(document).ready(function() {
  
  loadTweets();
  
  function createTweetElement(tweet) {
    function escape(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }
    var html = `
    <article class="tweet">
    <header>
    <img src="${tweet.user.avatars.small}"/>
    <h3> ${tweet.user.name} </h3>
    <span> ${tweet.user.handle} </span>
    </header>
    <div class="content"> ${escape(tweet.content.text)} </div>
    <footer>
    <span>${tweet.created_at}</span>
    <i class="fa fa-flag" aria-hidden="true"></i>
    <i class="fa fa-retweet" aria-hidden="true"></i>
    <i class="fa fa-heart" aria-hidden="true"></i>
    </footer>
    </article> `
    return html;
  }
  
  function renderTweets(data) {
    let allTweets = "";
    data.forEach(function(tweet) {
      var $tweet = createTweetElement(tweet);
      allTweets = $tweet + allTweets;
    });
    $('#tweetList').empty().prepend(allTweets);
  }
  
  $('#composedTweet').submit(function(event) {
    event.preventDefault();    
    
    var flag = false;
    var input = $('#text').val();
    
    if(!input){
      alert("hey! you need to enter something");
      flag = true;
    } else if (input.length > 140) {
      alert("Your tweet is too long!");
      flag = true
    }
    if(!flag){
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize()
      }).success(function(data) {
        var newTweet = createTweetElement(data.tweet);
        $('#tweetList').prepend(newTweet);
        $('#text').val('');
      });
    }
  });
  
  function loadTweets() {
    $.ajax({
      method:   "GET",
      url:      "/tweets",
      dataType: "json",
      success:  function(data) {
        renderTweets(data);
      },
      error:    function(response) {
      }
    });
  }
});