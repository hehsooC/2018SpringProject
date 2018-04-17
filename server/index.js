const express = require('express');

const simple = require('./simpleController');

var app = express();

const servername = "localhost";
const port = 8080;



app.use('./simpleController', simple).listen(port); 