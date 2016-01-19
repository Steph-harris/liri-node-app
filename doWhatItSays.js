var fs = require("fs");

fs.readFile("random.txt", "utf8", function(error, data){
  var splitIt = data.split(",")
  console.log(splitIt[0]);
  console.log(splitIt[1]);
})