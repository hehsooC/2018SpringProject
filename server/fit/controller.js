var express = require('express');
var Fit = require('./model');

var app = express.Router();
 
var fit = new Fit(); 
     
  
module.exports = app
    // get state of server
    .get('/state', (req, res) => res.send(fit))
    // Give random images to home component
    .get('/home/getImage', (req, res) => res.send(fit.SendPic()))
    // create a new user
    .get('/sign-up', (req, res) =>{
     res.send( fit.SignUp(req.query.name, req.query.password) );
    })
    // find user data when someone logs in
    .get('/exercise/login', (req, res) =>{
        res.send( fit.LogIn(req.query.name, req.query.password));
    })
    // Give other users' name to Me
    .get('/exercise/people', (req, res) => {
        res.send(fit.GiveUserList(req.query.name));
    })
    // Give this user's previous workout history by date
    .get('/exercise/getHistory', (req, res) => {
        res.send(fit.GetHistory(req.query.user, req.query.key));
    })
    // Give friend's history
    .get('/exercise/friendSummary', (req, res) => {
        res.send(fit.GetFriendSummary(req.query.name, req.query.key, req.query.friend));
    })
    // refresh Me to update
    .get('/exercise/refreshMe', (req,res)=>{
        res.send(fit.RefreshMe(req.query.name));
    })
    // post profile to a server
    .post('/exercise/profile', (req, res) =>{
        var profile = fit.ProfileAdd(req.body.Age, req.body.Weight, req.body.Height, 
                        req.body.GoalWeight, req.body.BMI, req.body.GoalBMI, 
                        req.body.name);
        res.send(profile);
    })
    // post set date and month to the server
    .post('/exercise/setDay', (req, res) => {
        res.send(fit.SetDay(req.body.name, req.body.key, req.body.month, req.body.date));
     })
     // post planned history list to the server
    .post('/exercise/planHistory', (req, res) =>{
        var plan = fit.PlanHistory(req.body.name, req.body.Text, req.body.key);
        res.send(plan);
    })
    .post('/exercise/dismissPlan', (req, res) =>{
        var plan = fit.DismissPlan(req.body.name, req.body.Text, req.body.key);
        res.send(plan);
    })
    // change the status of Chosen - this will change the color of planned history list if it's chosen.
    .post('/exercise/chosen', (req,res) => {
        res.send(fit.MakeChosen(req.body.name, req.body.text, req.body.key));
    })
    // update or retrieve total workout time.
    .post('/exercise/totaltime', (req, res) => {
        res.send(String(fit.GetTotalTime(req.body.name, req.body.key, req.body.totalTime)));
    }) 
    // Update the Done Exercise List in History[].
    .post('/exercise/recordDay', (req, res) => {
        res.send(fit.RecordDay(req.body.name, req.body.key, req.body.text, req.body.time, req.body.set, req.body.total));
    })
    // send a friend request to a selected other user.
    .post('/exercise/request', (req,res) => {
       res.send( fit.FriendRequest(req.body.friend, req.body.name));
    })
    // if Me sends a friend request to other user, indicate that the friend request is sent.
    .post('/exercise/sentRequestChange', (req,res) => {
        res.send( fit.SentRequestChange(req.body.friend, req.body.name, req.body.status));
     })
    // add friend if a friend request is accepted
    .post('/exercise/addFriend', (req,res)=>{
        res.send(fit.AddFriend(req.body.name, req.body.friend));
    })
    // update friend's workout history
    .post('/exercise/addFriendHistory', (req,res)=>{
        res.send(fit.AddFriendHistory(req.body.name, req.body.friend));
    })
    // change the status if this user gets a friend request.
    .post('/exercise/changeRequest', (req, res) => {
        res.send(fit.ChangeRequested(req.body.name));
    }); 
 