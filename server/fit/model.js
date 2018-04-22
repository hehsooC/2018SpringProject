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
 
function Fit() {  
        this.Person = [];
        this.PlanExercise = [];
        this.Profile = [];
        this.DoneExerciseList = [];

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
 
        this.ProfileAdd = (profile) =>{
            this.Profile.push( {Age: profile});
//, Weight: profile.weight, Height: profile.height, GoalWeight: profile.goalWeight, BMI: profile.bmi, GoalBMI: profile.goalBmi
        } 

} 

module.exports = Fit; 