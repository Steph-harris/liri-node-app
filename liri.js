debugger;
var task = process.argv[2];
var myTweets = require("./myTweets.js");
var spotifyThis = require("./spotifyThis.js");
var omdbThis = require("./omdbThis.js");
var doWhatever = require("./doWhatItSays.js")

function doWhat(){
  switch(task){
    case "my-tweets":
      result = myTweets();
      break;

    case "spotify-this-song":
      result = spotifyThis();
      break;

    case "movie-this":
      result = omdbThis();
      break;

    case "do-what-it-says":
      result = doWhatever();
      break;
  }
}

doWhat();