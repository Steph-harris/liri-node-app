debugger;
var fs = require("fs");
var task = process.argv[2];
var myTweets = require("./myTweets.js");
var spotifyThis = require("./spotifyThis.js");
var omdbThis = require("./omdbThis.js");

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

function doWhatever(){
  fs.readFile("random.txt", "utf8", function(error, data){
      var splitIt = data.split(",");

      task = (splitIt[0]);
      process.argv[3] = (splitIt[1]);
      doWhat();
  });
}

doWhat();