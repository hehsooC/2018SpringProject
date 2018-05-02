var express = require('express');
var Fit = require('./model');

var app = express.Router();
 
var fit = new Fit(); 
    
  
module.exports = app
    .get('/state', (req, res) => res.send(fit))
    .get('/exercise', (req, res) =>{
     res.send( fit.SignUp(req.query.name, req.query.password) ) 
    })
    .get('/exercise/login', (req, res) =>{
        res.send( fit.LogIn(req.query.name, req.query.password))
    }) 
    .post('/exercise/profile', (req, res) =>{
        console.log('send profile to server - controller');
        var profile = fit.ProfileAdd(req.body.Age, req.body.Weight, req.body.Height, 
                        req.body.GoalWeight, req.body.BMI, req.body.GoalBMI, 
                        req.body.name);
        res.send(profile);
    })
    
  /*   .get('/exercise/share', (req, res) =>{
        console.log('different user: ' + req.query)
        // need to send different approach for different user
        res.send(fit.SharingOthers(req.query.userId));
       }) */
/*     .get('/exercise/getList', (req, res) => {
        console.log('does it really get the list?');
        res.send( fit.GiveExerciseList(req.body.userId));
    })
         */
    // this works but couldn't find api database for workout
    //.post('/exercise/info', (req, res) => res.send( fit.GetHealthInfo()))
/*     .post('/exercise', (req, res) => {
        
        try {
            console.log('text body is ' + req.body.Text);
            fit.SubmitWorkout(req.body.Text, req.body.UserId);
            res.send( { success: true } );            
        } catch (error) {
            res.status(403).send({ success: false, message: error.message }); 
        }
    })
   */
    // need to work on this
/*     .post('/exercise/choose', (req, res) => { 
    
        fit.DoneExercise(req.body.Text);
        res.send( { success: true } );
          
    })
    // need to work on this
 */; 
  
 
 