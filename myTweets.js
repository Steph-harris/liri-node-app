module.exports = function(){ 
  var Twitter = require("twitter");
  var keys = require("./keys.js");
  var twitterConsKey = twitterKeys.consumer_key;
  var twitterSecret = twitterKeys.consumer_secret;
  var twitterTokKey = twitterKeys.access_token_key;
  var twitterTokSecret = twitterKeys.access_token_secret;

  var client = new Twitter({
    consumer_key: twitterConsKey,
    consumer_secret: twitterSecret,
    access_token_key: twitterTokKey,
    access_token_secret: twitterTokSecret,
  });

  client.get('statuses/user_timeline', function(error, tweets, response){
    if(error) throw error;

    for(var i = 0; i<tweets.length; i++){
    console.log("On " + tweets[i].created_at + " I tweeted: " + tweets[i].text);  // The tweets.  
    }
  });
}