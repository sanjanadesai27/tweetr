$(document).ready(function(){

  loadTweets();


  function createTweetElement(tweet) {

    var html = `
    <article class="tweet">
    <header>
    <img src="${tweet.user.avatars.small}"/>
    <h3> ${tweet.user.name} </h3>
    <span> ${tweet.user.handle} </span>
    </header>
    <div class="content"> ${tweet.content.text} </div>
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
    data.forEach(function(tweet){
      var $tweet = createTweetElement(tweet);
      allTweets = $tweet + allTweets;
    }
    );
        $('#tweetList').empty().prepend(allTweets); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

      }

      $('#composedTweet').submit(function(event){
        event.preventDefault();
        var formInput = $(this).serialize();
        var flag = false;

        if(!formInput){
          alert("hey! you need to enter something");
          flag = true;
        } else if (formInput.length > 140) {
          alert("Your tweet is too long!");
          flag = true
        }
        if(!flag){
          $.ajax({
            method: "POST",
            url: "/tweets",
            data: formInput

          }).success((data) => {
            var newTweet = createTweetElement(data.tweet);
            console.log(newTweet);
            $('#tweetList').prepend(newTweet);
            this.reset();

          // loadTweets();
        });
        }

      });


      function loadTweets() {
       $.ajax({
        method: "GET",
        url: "/tweets",
        dataType: "json",
        success: function(data){
          // console.log(data);
          renderTweets(data);
        },
        error: function(response){
        }
    });//ajax call
     }



   });