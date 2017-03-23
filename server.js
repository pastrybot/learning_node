var express = require ('express');
var app = express();

app.get('/greeting', function(req, res){
    res.send("you found the greeting endpoint!")
});

app.get('/sadface', function(req, res){
  res.send('This is bullshit😰')
});
app.get('/happy', function(req, res){
  res.send('We are going to understand this so well!😄')
});
var server = app.listen(3000, function(){
  console.log('Your app is running on port 3000')
});
