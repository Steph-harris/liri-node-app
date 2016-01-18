debugger;
var Twitter = require('twitter');
var keys = require("./keys.js");
var task = process.argv[2];
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

var params = {screen_name: "steph_harris21"};
client.get('statuses/user_timeline', function(error, tweets, response){
  if(error) throw error;
  console.log(tweets);  // The tweets. 
  //console.log(response);  // Raw response object. 
});
console.log(task);