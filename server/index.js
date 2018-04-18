const express = require('express');

const simple = require('./simpleController');

var app = express();

const servername = "localhost";
const port = 8080;




app.get('/goodbye', function (req, res) {
    res.write('New Paltz');
    res.end();

  });

app.get('/hello', function(req,res){
    res.write('World');
    res.end();
});
app.use('./simpleController', simple).listen(port); 

  console.log("running on http://" + servername + ":" + port);
