//started by copying activity 04 server.js code

// Dependencies
const http = require("http");
const fs = require("fs");

// Set our port to 8080
const PORT = 8080;

// Create our server
const server = http.createServer(handleRequest);




// Create a function for handling the requests and responses coming into our server
function handleRequest(request, response) {
  
  //Add a variable for url
  let {url}=request;

  if(url==="/"){
    url="/index.html";
  };
  // Here we use the fs package to read our index.html file
  //fs.readFile("."+url, function(error, data) {
  //could also be written as   
  fs.readFile(__dirname+url, function(error, data) {

    if(!error){
      console.log(url);
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(data);
    }else{
      display404(url,response)
    }
  });
}

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, response) {
  var myHTML = "<html>" +
    "<body><h1>404 Not Found </h1>" +
    "<p>The page you were looking for: " + url + " can not be found</p>" +
    "</body></html>";

  // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
  response.writeHead(404, { "Content-Type": "text/html" });

  // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
  response.end(myHTML);
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
