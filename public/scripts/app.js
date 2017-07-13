$(document).ready(function(){

  loadTweets();

  var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
    ];

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
      </footer>
      </article> `
      return html;
    }

    function renderTweets(data) {
      let allTweets = "";
      data.forEach(function(tweet){
        console.log(tweet);
        var $tweet = createTweetElement(tweet);
        console.log($tweet);
        allTweets = $tweet + allTweets;
      }
      );
        $('#tweetList').empty().prepend(allTweets); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

      }

      $('#composedTweet').submit(function(event){
        event.preventDefault();
        var formInput = $(this).serialize();
        console.log(formInput);
        var flag = false;

        if(!formInput){
          alert("hey! you need to enter something");
          flag = true;
        } else if (formInput.length > 140) {
          alert("Your tweet is too long!");
          flag = true
        }
        else{
          alert('Great!');
        }

        if(!flag){
          $.ajax({
            method: "POST",
            url: "/tweets",
            data: formInput
        }).done(() => {
          console.log(data);
          loadTweets();
        });
      }

    });


      function loadTweets() {
       $.ajax({
        method: "GET",
        url: "/tweets",
        dataType: "json",
        success: function(data){
          console.log(data);
          renderTweets(data);
        },
        error: function(response){
        }
    });//ajax call
     }



   });