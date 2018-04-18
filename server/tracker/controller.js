
var express = require('express'); 
var Fit = require('./model');


var app = express.Router(); 

var fit = new Fit();

module.exports = app   
    .get('/exercise', (req, res) => res.send())
