var axios = require("axios");

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

var HealthInfoStack = [];

axios.get('https://healthfinder.gov/FreeContent/Developer/Search.json?api_key=demo_api_key&CategoryID=16')
    .then(
        response => HealthInfoStack = response.data.Result.Topics,
        err => console.log(err)
    );
 
 
var currentInfo = 0;

function Fit() {  
        this.Person = [];
        this.PlanExercise = [];
        this.Profile = [];
        this.DoneExerciseList = [];
        this.Info = null;

        this.GetExerciseList = (userId) => {
            if(this.Person.some(x=> x.UserId == userId)){
                
            }else{
                this.Person.push({ UserId: userId, Name: userId, TotalWorkout: 0 });
            }
                return ExerciseStack.slice(0, ExerciseStack.length-1);   
        }
        
        this.SubmitWorkout = (text, userId) => {
            console.log('text is ' + text);
            this.PlanExercise.push({ Text: text, UserId: userId });
        }  
        this.DoneExercise = text => {
            const chosenWorkout = this.PlanExercise.find(x=> x.Text == text)
            chosenWorkout.Chosen = true;
            this.Person.find(x=> x.UserId == chosenWorkout.UserId).TotalWorkout++;
            this.DoneExerciseList.push({Text: text});
        } 
  
        // at Home, Give a user to a health information.
        this.GetHealthInfo = () => {
            this.Info = HealthInfoStack[currentInfo = (currentInfo+1) % HealthInfoStack.length];
        }

        this.ProfileAdd = (profile) =>{
            this.Profile.push( {Age: profile});
//, Weight: profile.weight, Height: profile.height, GoalWeight: profile.goalWeight, BMI: profile.bmi, GoalBMI: profile.goalBmi
        } 

} 

module.exports = Fit; 