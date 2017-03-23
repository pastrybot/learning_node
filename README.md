a node project must have a package.json, the easiest way to add one, is to run the command 'npm init'
install express into your package by running the command 'npm install --save express' (make sure you're in the root of your project)
require express into your server.js

then create your own app variable like so : 'var app = express();' beneath your requirements

make sure to run 'node server.js' in your terminal before checking your browser to see if it's working

get our http method: 'app.get('/greeting', function(req, res){
    res.send("you found the greeting endpoint!")
});
so localhost 3000/greeting is where we go to make a request
(req, res), the client makes a request the server sends a response
