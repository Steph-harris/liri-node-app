module.exports = function(){
  var fs = require("fs");
  var liri = require("./liri.js");

  fs.readFile("random.txt", "utf8", function(error, data){
    var splitIt = data.split(",");

    task = (splitIt[0]);
    process.argv[3] = (splitIt[1]);
    doWhat();
  });
}