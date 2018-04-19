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
    this.GetExerciseList = () => { 
        return ExerciseList.toString(); 
    }
}

module.exports = Fit;