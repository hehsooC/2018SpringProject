var ExerciseList =  [
    "Push Up",
    "Aerobics",
    "Plank",
    "Abdominal exercise"
    
 ];
 /**
 class Fit {
     constructor() {
         this.GetExerciseList = () => ExerciseList.slice(0,1);
     }
 }
 */

function Fit() {
    this.User = [];
    this.ExerciseList = [];

    this.GetExerciseList = () => { 
        return ExerciseList.slice(0,3); 
    }

    this.GetExerciseList = (name) => {
        if(this.User.some(x=> x.Name == name )){
            
        }else{
            this.User.push({ Name: name});
        }
            return ExerciseList.toString();   
    }
}

module.exports = Fit;