
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
        this.PlanExercise = [];
        this.Profile = [];
        this.DoneExerciseList = [];
        this.HealthInfo = null;
        this.ExerciseList = [];  
 
        this.GiveExerciseList = (userId) =>{
            console.log('give the global exercise list');
            return ExerciseStack;   

        } 
        this.SignUp = (userId) => {
            /* if(!this.FirstUser )
                {this.FirstUser = userId } */
            if(this.Person.includes(x => x.Name == userId)){
                console.log('user already exist');
                return;
            }else{
                this.Person.push({ UserId: userId, Name: userId, TotalWorkout: 0 });
            }
 
               // return ExerciseStack.slice(0, ExerciseStack.length-1);  
        }       
  
        this.GetData = (userId) => {
            console.log('user Id is ' + userId);
            if(this.Person.find(x=> x.UserId == userId))
                console.log('return ' + userId +' Profile');
                return this.Profile;
        }
    /*     this.SharingOthers = (userId) => {
            console.log('sharing?');
            //if(this.FirstUser != userId)
                this.OtherUser.push({Name: userId});
        }  
           */  
        this.SubmitWorkout = (text, userId) => {
            console.log('text is ' + text);
            if(!this.PlanExercise.find(x => x.Text == text)){
                this.PlanExercise.push({ Text: text, UserId: userId });
                
            }

        }    
        this.DoneExercise = text => {
            const chosenWorkout = this.PlanExercise.find(x=> x.Text == text)
            chosenWorkout.Chosen = true;
            this.Person.find(x=> x.UserId == chosenWorkout.UserId).TotalWorkout+=3;
            //this.DoneExerciseList.push({ Text: text, WorkoutMinute: 0});
            //this.DoneExerciseList.find(x => x.Text = text).WorkoutMinute +=3;
            if(!this.DoneExerciseList.find(x => x.Text == text)){
                console.log('pushing exercise');
                this.DoneExerciseList.push({Text: text});
            } 
         
             
        }  

 
  /** Couldn't find the health information database yet. 
         // at Home, Give a user to a health information.
        this.GetHealthInfo = () => {
            this.HealthInfo = HealthInfoStack[currentInfo = (currentInfo+1) % HealthInfoStack.length];
        }
         */ 

        this.ProfileAdd = (age, weight, height, goalWeight, bmi, goalBmi, userId) =>{
            this.Profile.push( {Age: age, Weight: weight, Height: height, GoalWeight: goalWeight, BMI: bmi, GoalBMI: goalBmi, UserId: userId} );
            console.log('received ' + age + ", " + userId )
//, Weight: profile.weight, Height: profile.height, GoalWeight: profile.goalWeight, BMI: profile.bmi, GoalBMI: profile.goalBmi
        } 
  
}   
 
module.exports = Fit; 