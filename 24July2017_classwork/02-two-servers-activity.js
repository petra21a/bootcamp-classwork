/*
# **Instructions**

* Using the previous example as a guide, create an app that has two web servers.
* One that listens on port 7000 and one that listens on port 7500.
* The one listening on port 7000 will always tell the user something good about themselves.
* The one listening on 7500 will always tell the user something bad about themselves.
* Make sure you create a Github repo and commit this code!

**Bonus**

* Look for other ways to expand what your server can do. As possibilities:
  * Generate the good/bad phrase randomly from a list of predefined phrases
  * Use the `twitter` package inside the response to also return a random tweet
*/


//CODE
const http = require('http');

//8080 is outside the common port range so should be open
const portGood = 7000;
const portBad = 7500;

const serverGood = http.createServer(handleRequestGood);
const serverBad = http.createServer(handleRequestBad);

// Create a generic function to handle requests and responses
function handleRequestGood(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("GOOD TIMES");
}
// Create a generic function to handle requests and responses
function handleRequestBad(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("BAD TIMES");
}

serverGood.listen(portGood, function () {
  console.log("GOOD THINGS")
});
serverBad.listen(portBad, function () {
  console.log("BAD THINGS")
});