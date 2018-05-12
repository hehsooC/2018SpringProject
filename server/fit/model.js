

/**
// this works but couldn't find api database for workout
var axios = require("axios");
var HealthInfoStack = [];

axios.get('https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=fitness')
    .then(
        response => HealthInfoStack = response.data,
        err => console.log(err)
    ); 
 
var currentInfo = 0;
      
 */       
  
function Fit() {  
        this.Person = [];
        this.Share = [];
        //this.HealthInfo = null; 
        
     // creates a new user in the server.
        this.SignUp = (name, password) => {
            // if there is a username in the server, return false.
            if(this.Person.find(x => x.Name == name)){
                return false;
            }else{
                // if there is no username matched, create a new Person object.
                this.Person.push({ Name: name, Password: password, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null},
                      Notice: [], Requested: false, FriendList:[], History: []});
                return true;
            }
        }        
    
    // send the user's information to server 
        this.LogIn = (name, password) => {
            // if there is a user in the server, send the information.
            if(this.Person.find(x => x.Name == name)){
                var user = this.Person.find( x => x.Name == name);
                // check if username and password is matching
                if(user.Name == name && user.Password == password){
                    return user;
                } 
                else{
                    return false;
                }
            }  
            else{ 
                return false;
            }  
        } 
       
        // Add each user's profile
        this.ProfileAdd = (age, weight, height, goalWeight, bmi, goalBmi, name) =>{
            if(this.Person.find(x => x.Name == name)){
                var userProfile = this.Person.find(x => x.Name == name).Profile = {Age: age, Weight: weight, Height: height, 
                    GoalWeight: goalWeight, BMI: bmi, GoalBMI: goalBmi};
                return userProfile;
            }  
        }

        // set the date of this workout date.
        this.SetDay = (name, key, month, date) => {
            var userFound = this.Person.find( x => x.Name == name);
            var historyFound = userFound.History.find(x=>x.KeyDate == key);
            if(!historyFound){
                userFound.History.push({ DoneExerciseList:[],PlanExercise: [], TotalSetTime: 0,  Month: month, Date: date, KeyDate: key});
                return false;
            }
            // return found history to Me
            else{
                console.log('return user history');
                return historyFound;
                
            }

        }


        // put user's planned workout list into PlanExercise in History[]
        this.PlanHistory = (name, text, key) => {
            var userFound = this.Person.find(x => x.Name == name);
            var historyFound = userFound.History.find(x=>x.KeyDate == key);
            
            if(!historyFound.PlanExercise.length == 0){
                var plan = historyFound.PlanExercise;
                if(!plan.find(x => x.Text == text)){
                    plan.push({Text: text, Chosen: false});
                    return plan;
                }
                return;
            }
            else{
                historyFound.PlanExercise.push({Text: text, Chosen: false});
                return historyFound.PlanExercise;

            }
            
            
           
        }


        

        // if a planned workout list is selected, make Chosen to true to indicate this exercise is done.
        this.MakeChosen = (name, text, key) => {
            var user = this.Person.find(x => x.Name == name);
            var history = user.History.find(x => x.KeyDate == key);
            var chosenWorkout = history.PlanExercise.find(x=> x.Text == text);
            chosenWorkout.Chosen = true;
            return history.PlanExercise;
        }

        // post selected workout to the server in Person[]
        this.DoneExercise = (name, text, time, set, total) => {

            
            var user = this.Person.find(x => x.Name == name);

            if(user){
                if(!user.DoneExerciseList.find(x => x.Text == text)){
                    user.DoneExerciseList.push({Text: text, Time: time, Set: set, TotalTime: total});
                    var plan = user.DoneExerciseList;
                    return plan;
                }
                else{
                    var done = user.DoneExerciseList.find(x => x.Text == text);
                    done.Time = Number(done.Time) + Number(time);
                    done.Set = Number(done.Set) + Number(set);
                    done.TotalTime = Number(done.TotalTime) + Number(total);
                    
                    return user.DoneExerciseList;

                }
            }
            else{
                console.log('fail to done exercise - model');
                return false;
            }
            
        } 

        // Update total workout time.
        this.GetTotalTime = (name, key, totalTime) => {
            var userFound = this.Person.find(x => x.Name == name);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            
            if(!historyFound){
                console.log('history not found');
                return false;
            }
            // if there is workout history, update it.
            else{
                historyFound.TotalSetTime = totalTime;
                return historyFound.TotalSetTime;
                
            }
        }

        // Update the Done Exercise List in History[].
        this.RecordDay = (name, key, text, time, set, total) => {

            var userFound = this.Person.find(x => x.Name == name);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            if(!historyFound.DoneExerciseList.length == 0){
                var done = historyFound.DoneExerciseList;
                if(!done.find(x => x.Text == text)){
                    done.push({Text: text, Time: time, Set: set, TotalTime: total});
                    return done;
                }
                else{
                    var done2 = historyFound.DoneExerciseList.find(x => x.Text == text);
                    done2.Time = Number(done2.Time) + Number(time);
                    done2.Set = Number(done2.Set) + Number(set);
                    done2.TotalTime = Number(done2.TotalTime) + Number(total);
                    
                    return historyFound.DoneExerciseList;

                }
            }
            else{
                historyFound.DoneExerciseList.push({Text: text, Time: time, Set: set, TotalTime: total});
                return historyFound.DoneExerciseList;
            }

        }


    

        // give other users' name to this user.
        this.GiveUserList = (name) => {
            if(!this.Share.find(x => x.Name == name)){
                this.Share.push({Name: name});
                return this.Share;
            }
            else{
                return this.Share;
            }
        }
    
        // Update the friend requested status to this user
        this.GiveRequestState = (name) =>{
            var me = this.Person.find(x => x.Name == name);
            return me;
        }

        // send a friend request to a selected other user.
        this.FriendRequest = (friend, name) => {
            console.log('_model_ friend request');
            var me = this.Person.find(x => x.Name == name);
            var msg = me.Name + ' sent a friend request!'
            var friendUser = this.Person.find(x => x.Name == friend);
            if(!friendUser.Notice.find(x=> x.Name == friend) && !friendUser.FriendList.find(x=>x.Name == name)){
                friendUser.Notice.push({Name: friend, Friend: name, Msg: msg});
                friendUser.Requested = true;
            }
            else{
                console.log('friend request already done!');
                
            }
        }

        // if friend request is accepted, add that user to this user's friendList.
        this.AddFriend = (name, friend) =>{
            var user = this.Person.find(x=> x.Name == name);

            var friendN = this.Person.find(x=> x.Name == friend);
            user.FriendList.push({Name: friend});
            friendN.FriendList.push({Name: name});
            user.Notice.splice(user.Notice.indexOf(name), 1);
            return user.FriendList;

        }

        // indicates if this user gets a friend request or not.
        this.ChangeRequested = ( name )=>{
            var user = this.Person.find( x => x.Name == name);
            user.Requested = false;
        }

        // send a user's workout summary to History Component.
        this.GetSummary = (user, key) => {
            var userFound = this.Person.find( x => x.Name == user);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            return historyFound;
        }
        
        this.GetHistory = (user, key) => {
            var userFound = this.Person.find( x => x.Name == user);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            return historyFound;
        }
        
        

 
  /** Couldn't find the health information database yet. 
         // at Home, Give a user to a health information.
        this.GetHealthInfo = () => {
            this.HealthInfo = HealthInfoStack[currentInfo = (currentInfo+1) % HealthInfoStack.length];
        }
         */ 

       
  
}   
 
module.exports = Fit; 