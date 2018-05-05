

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
        //this.Record = [];
        this.Share = [];
       // this.Request = [];
        //this.HealthInfo = null; 
       // this.ExerciseList = [];   
        
     
/*         this.GiveExerciseList = (userId) =>{ 
            console.log('give the global exercise list');
            return ExerciseStack;   
   
        }   */ 
        this.SignUp = (name, password) => {
        
            if(this.Person.find(x => x.Name == name)){
                return false;
            }else{
                this.Person.push({ Name: name, Password: password, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null},
                    PlanExercise: [], DoneExerciseList: [], Notice: [], Requested: false, FriendList:[]});
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

        // push the list of planned workout to the PlanExercise.
        this.PlanWorkout = (name, text) => {

            // Find user, and if a user exists, 
            //find if there is selected workout list in the PlanExercise, if doesn't exist, push the list
            if(this.Person.find(x => x.Name == name)){
                var user = this.Person.find(x => x.Name == name);

                if(!user.PlanExercise.find(x => x.Text == text)){
                    user.PlanExercise.push({Text: text, Chosen: false});
                    var plan = user.PlanExercise;
                    return plan;
                }
                return false;
            }
            else{
                console.log('fail to push plan - model');
                return false;
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

        this.GetTotalTime = (name, totalSet) => {
            var user = this.Person.find(x => x.Name == name);
            user.TotalSetTime = totalSet

            return user.TotalSetTime;

        }

        this.GiveUserList = (name) => {
            console.log('_server_give user list');
            if(!this.Share.find(x => x.Name == name)){
                this.Share.push({Name: name});
                return this.Share;

            }
            else{
                return this.Share;
            }
            /* if(!user)
                user.Share.push(this.Person.Name); */
        }
    
        this.FriendRequest = (friend, name) => {
            console.log('_model_ friend request');
            var me = this.Person.find(x => x.Name == name);
            var msg = me.Name + ' sent a friend request!'
            var friendUser = this.Person.find(x => x.Name == friend);
            
            friendUser.Notice.push({Name: friend, Msg: msg});
            friendUser.Requested = true;

            



        }
        this.AddFriend = (name, friend) =>{
            console.log('AddFriend -model');
            var user = this.Person.find(x=> x.Name == name);
            user.FriendList.push({Name: friend});

        }

        this.RefreshUser= (name) =>{
            console.log('user refreshed - model');
            var user = this.Person.find(x=> x.Name == name);
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