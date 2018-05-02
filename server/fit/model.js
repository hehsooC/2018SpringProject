
const ExerciseStack =  [
   "Squat",
   "Plank", 
    "Running",
    "Jump Rope",
    "Swimming",
    "Walk",
    "Aerobic Dance",
    "Zumba",
    "Yoga",
    "Centergy",
    "Stretching",
    "Gentle Yoga",
    "Push Up"
    ];
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
        //this.HealthInfo = null; 
        this.ExerciseList = [];  
        
     
/*         this.GiveExerciseList = (userId) =>{ 
            console.log('give the global exercise list');
            return ExerciseStack;   
   
        }   */ 
        this.SignUp = (name, password) => {
            if(this.Person.find(x => x.Name == name)){
                console.log('user already exist - model.js');
                return false;
            }else{
                this.Person.push({ Name: name, Password: password, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null},
                    PlanExercise: [], DoneExerciseList: []});
                return true;
            }
             
        }        

        this.LogIn = (name, password) => {
            if(this.Person.find(x => x.Name == name)){
                var user = this.Person.find( x => x.Name == name);
                if(user.Name == name && user.Password == password){
                    console.log('log in! - model')
                    return user;
                } 
            }  
            else{ 
                console.log('user not exist - model')
                return false;
            }  
        } 
       
        this.ProfileAdd = (age, weight, height, goalWeight, bmi, goalBmi, name) =>{
            console.log('try to find user to add profile - model');
            if(this.Person.find(x => x.Name == name)){
                console.log('adding profile - model');
                var userProfile = this.Person.find(x => x.Name == name).Profile = {Age: age, Weight: weight, Height: height, 
                    GoalWeight: goalWeight, BMI: bmi, GoalBMI: goalBmi};
                return userProfile;
            } 
        }
/*         this.GetData = (userId) => {   
            console.log('user Id is ' + userId); 
            if(this.Person.find(x=> x.UserId == userId))
                console.log('return ' + userId +' Profile');
                return this.Profile;
        } */
    /*     this.SharingOthers = (userId) => {
            console.log('sharing?');
            //if(this.FirstUser != userId)
                this.OtherUser.push({Name: userId});
        }  
           */  
/*         this.SubmitWorkout = (text, userId) => {
            console.log('text is ' + text);
            if(!this.PlanExercise.find(x => x.Text == text)){
                this.PlanExercise.push({ Text: text, UserId: userId });
                
            }

        }  */   
/*         this.DoneExercise = text => {
            const chosenWorkout = this.PlanExercise.find(x=> x.Text == text)
            chosenWorkout.Chosen = true;
            this.Person.find(x=> x.UserId == chosenWorkout.UserId).TotalWorkout+=3;
            //this.DoneExerciseList.push({ Text: text, WorkoutMinute: 0});
            //this.DoneExerciseList.find(x => x.Text = text).WorkoutMinute +=3;
            if(!this.DoneExerciseList.find(x => x.Text == text)){
                console.log('pushing exercise');
                this.DoneExerciseList.push({Text: text});
            } 
         
             
        }  */ 

 
  /** Couldn't find the health information database yet. 
         // at Home, Give a user to a health information.
        this.GetHealthInfo = () => {
            this.HealthInfo = HealthInfoStack[currentInfo = (currentInfo+1) % HealthInfoStack.length];
        }
         */ 

       
  
}   
 
module.exports = Fit; 