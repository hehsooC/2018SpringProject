

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
        
     
        this.SignUp = (name, password) => {
        
            if(this.Person.find(x => x.Name == name)){
                return false;
            }else{
                this.Person.push({ Name: name, Password: password, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null},
                    PlanExercise: [], DoneExerciseList: [], Notice: [], TotalSetTime: 0, Requested: false, FriendList:[], History: [], Month: null, Date: null});
                return true;
            }
             
        }        

        this.LogIn = (name, password) => {
            if(this.Person.find(x => x.Name == name)){
                var user = this.Person.find( x => x.Name == name);
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
        this.SetDay = (user, key) => {
            var userFound = this.Person.find( x => x.Name == user.Name);
            
            var historyFound = userFound.History.find(x=>x.KeyDate == key);
            if(!historyFound){
                userFound.History.push(user.History.find(x=>x.KeyDate == key));
                
            }
            else{
                console.log('_model_ history already exist');
                
            }

        }

        // push the list of planned workout to the PlanExercise.
        this.PlanWorkout = (name, text) => {
            var user = this.Person.find(x => x.Name == name);

            // Find user, and if a user exists, 
            //find if there is selected workout list in the PlanExercise, if doesn't exist, push the list
            if(user){

                if(!user.PlanExercise.find(x => x.Text == text)){
                    user.PlanExercise.push({Text: text, Chosen: false});
                    var plan = user.PlanExercise;
                    // return plan;
                }
                // return false;
            }
            else{
                console.log('fail to push plan - model');
                // return false;
            }

        }

        this.PlanHistory = (user, text, key) => {
            var userFound = this.Person.find(x => x.Name == user.Name);
            var historyFound = userFound.History.find(x=>x.KeyDate == key);
            if(!historyFound){
                console.log('history not found');
            }
            else{
                historyFound.PlanExercise = user.PlanExercise;
                
                
            }


        }

        this.MakeChosen = (name, text) => {
            var user = this.Person.find(x => x.Name == name);
            var chosenWorkout = user.PlanExercise.find(x=> x.Text == text)
            chosenWorkout.Chosen = true;
            return user.PlanExercise;
        }


        this.DoneExercise = (name, list) => {
            var user = this.Person.find(x => x.Name == name);

            if(user){

                user.DoneExerciseList = list;
                return user.DoneExerciseList;
                
            }
            else{
                console.log('fail to done exercise - model');
                return false;
            }
            
             
        }  
        this.RecordDay = (name, user, key) => {

            var userFound = this.Person.find(x => x.Name == user.Name);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            if(!historyFound){
                console.log('history not found');
            }
            else{
                historyFound.DoneExerciseList = user.DoneExerciseList;
                
                
            }

        }

        this.GetTotalTime = (user, key, totalTime) => {

            var userFound = this.Person.find(x => x.Name == user.Name);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            if(!historyFound){
                console.log('history not found');
            }
            else{
                historyFound.TotalSetTime = totalTime;
                
                
            }
            userFound.TotalSetTime = totalTime;

            return userFound.TotalSetTime;

        }

        this.GiveUserList = (name) => {
            if(!this.Share.find(x => x.Name == name)){
                this.Share.push({Name: name});
                return this.Share;

            }
            else{
                return this.Share;
            }
        }
    
        this.GiveRequestState = (name) =>{
          
            var me = this.Person.find(x => x.Name == name);

            return me;

        }

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
        /*     if(this.Share.find(x=>x.Name == friend)){
                var index = this.Share.indexOf(friend);
                this.Share[index] = ({Name: friend, FriendRequest: true});
            }
 */



        }
        this.AddFriend = (name, friend) =>{
            var user = this.Person.find(x=> x.Name == name);

            var friendN = this.Person.find(x=> x.Name == friend);
            user.FriendList.push({Name: friend});
            friendN.FriendList.push({Name: name});
            user.Notice.splice(user.Notice.indexOf(name), 1);
            return user.FriendList;

        }

        this.ChangeRequested = ( name )=>{
            var user = this.Person.find( x => x.Name == name);
            user.Requested = false;
        }

        this.GetSummary = (user, key) => {
            console.log('user name is');
            console.log(user);
            var userFound = this.Person.find( x => x.Name == user);
            console.log('======');
            console.log(userFound);
            var historyFound = userFound.History.find(x=> x.KeyDate == key);
            console.log('_model_ GetSummary return');
            console.log(historyFound);
            return historyFound;

  
        }
        
        /* this.SetDay = (month, date, name, key) => {
            console.log('=======RecordDay server======');
            console.log('month ' + month);  
            console.log('date ' + date);
           
            var user = this.Person.find( x => x.Name == name);
            user.Month = month;
            user.Date = date;
            // create a history for specific month and date
            var monthMatch = user.History.find(x=>x.Month == month);
            var dateMatch = user.History.find(x=>x.Date == date);
            if(!monthMatch){
                user.History.push({ Name: name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: null, 
                    Month: month, Date: date, KeyDate: key});
                return user;
            }
            else{
                // if the specific date history already existed, don't create a new one, but find this history and return it to user.
                if(dateMatch){
                    console.log('datematch is ');
                    console.log(dateMatch);
                    return dateMatch;
                }
                else{
                    console.log('no history found');
                    return false;
                }
            }

            //user.Reset = true;

        } */
        
            // user.Reset = true;

        this.GetDay=(name)=>{
            var user = this.Person.find( x => x.Name == name);
            return user.Date;
        }
        this.GetMonth=(name)=>{
            var user = this.Person.find( x => x.Name == name);
            return user.Month;
        }

        this.RecordWorkokut = (month, date, name, done)=>{
            var user = this.Person.find( x => x.Name == name);
            user.History.find(x => x.Month == month);

        }
        this.GiveUser=(name)=>{
            var user = this.Person.find( x => x.Name == name);
            return user;
        }
 
  /** Couldn't find the health information database yet. 
         // at Home, Give a user to a health information.
        this.GetHealthInfo = () => {
            this.HealthInfo = HealthInfoStack[currentInfo = (currentInfo+1) % HealthInfoStack.length];
        }
         */ 

       
  
}   
 
module.exports = Fit; 