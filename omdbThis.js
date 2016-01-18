debugger;
var request = require("request");
var movie = process.argv[3];

request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json&tomatoes=true", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var returnedMovie = JSON.parse(body);
    console.log(returnedMovie.Title);
    console.log(returnedMovie.Year);
    console.log(returnedMovie.imdbRating);
    console.log(returnedMovie.Country);
    console.log(returnedMovie.Language);
    console.log(returnedMovie.Plot);
    console.log(returnedMovie.Actors);
    console.log(returnedMovie.tomatoRating);
    console.log(returnedMovie.tomatoURL);
  }
});