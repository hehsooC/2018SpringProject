var express = require('express');
var Fit = require('./model');

var app = express.Router();

var fit = new Fit();
// actions
// module.exports = app
//     .get('/profile', (req, res) => res.send( game.GetProfile() ));