debugger;
var task = process.argv[2];
var params = process.argv[3];
var myTweets = require("./myTweets.js");
var spotifyThis = require("./spotifyThis.js");
//var omdbThis = require("./omdbThis.js");

switch(task){
  case "my-tweets":
    result = myTweets();
    break;

  case "spotify-this-song":
    result = spotifyThis(params);
    break;

  case "movie-this":
    result = omdbThis();
    break;
}
console.log(params);