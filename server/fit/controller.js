var express = require('express');
var Fit = require('./model');

var app = express.Router();

var fit = new Fit(); 
 

module.exports = app
    .get('/exercise', (req, res) =>{
     res.send( fit.GetExerciseList(req.query.userId) ) 
    })
    .get('/state', (req, res) => res.send(fit))
    .post('/exercise', (req, res) => {
        console.log('req.body is ' + req.body);
        
        try {
            fit.SubmitWorkout(req.body.Text, req.body.UserId);
            res.send( { success: true } );            
        } catch (error) {
            res.status(403).send({ success: false, message: error.message });
        }
    })
    .post('/exercise/choose', (req, res) => { 
    
        fit.DoneExercise(req.body.Text);
        res.send( { success: true } );
        
    })
    .post('/exercise/profile', (req, res) =>{
        fit.ProfileAdd(req.body);
    });
 
 
 