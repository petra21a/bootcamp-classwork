const http = require('http');

//8080 is outside the common port range so should be open
const port = 8080;

//'handling a response' is probably something
//around getting a request and providing a response
// so pass those as arguments
function handleRequest(request, response) {
    console.log(request);

    //from http docmentation know have .end avaliable
    response.end("Hey")
    
    //get header infomration
    //needs status code
    //example content-type - lets the browser know how to execute something
    //each message has it's own content type, for others need new messages
    response.writeHead(200,{"content-type": "text/html"})
 
    //logs out url 
    console.log((requst.url));
    const url = request

    //can deconstruct:
    //const { url, 2,3,4,5, }

    //EXPRESS which we will be using is much more robust than a switch statement
    switch (url){
        case'/':
        function doSomething(response);
        break;
        case'reza':
        function doSomethingElse(response);
        break
    }
}
function doSomething(response) {

}

const server = http.createServer(handleRequest);

//have another called listen, which you pass a port
//like listening to firebase database
server.listen(port, function () {
    console.log("I'm listening...")
});

//loading a file

const fs = require('fs');
const pathFileExample = 7400;
const htmlPath = "./example-file.html";
function handleRequestFile(request, response) {

//will using sync to not have to deal with callbacks
const html = fs.readFileSync(htmlPath, "utf8");
response.writeHead(200,{"content-type": "text/html"})
response.end(html);


//an example of lstening for json type
const {url}=request;

if (url ==='/json'){
    response.writeHead(200,{"content-type": "application/json"})
response.end("{ \"property1\":\"1\" }")
//same as above with less call outs
response.end('{ "property1":"1" }')
}

};