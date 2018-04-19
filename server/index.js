const express = require('express');

const simple = require('./simpleController');
const fit = require('./tracker/controller');
const path = require('path');

var app = express();

const servername = "localhost";
const port = 8080;


app
  .use('/fit', fit)
  .use('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  })
  //.use('/', express.static(path.join(__dirname,"../dist/"))) 
 // .use('/fit', fit)
  // .use('/', (req, res, next) => {
  //   res.sendFile(path.join(__dirname,"../dist/index.html"));
  // })
  .listen(port);

  /**
app.get('/goodbye', function (req, res) {
    res.write('New Paltz');
    res.end();

  });

app.get('/hello', function(req,res){
    res.write('World');
    res.end();
});
app.use('./simpleController', simple).listen(port); 
 */
  console.log("running on http://" + servername + ":" + port);
