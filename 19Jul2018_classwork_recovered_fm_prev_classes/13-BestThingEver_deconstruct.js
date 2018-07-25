// fs is a core Node package for reading and writing files
let fs = require("fs");

// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("best_things_ever.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error !== null) {
      return console.log(error);
    }
  
    // Then split it by commas (to make it more readable)
    let dataArr = data.split(",");
  
    for (let i=0;i<dataArr.length;i++){
        if (i==0){
            console.log("  "+dataArr[i]);
        }else{
        console.log("    "+dataArr[i]);
        }
    }
});
