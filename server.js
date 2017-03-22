
var http = require('http');
//node module that creates a small server
//we are making a fucking server

http.createServer(function(request, response){
  response.end('hello world');
console.log("Your server is running at port 3000");
}).listen(3000); //this will start up our server at port 3000
