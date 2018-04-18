 export class Fit{
     User: Person[] = []; 
     ExerciseList: Workout[] = [
        {List:"push ups", Time: 10, Set: 3}
        
     ];
     
     Track: string[] = [];

 }

 export class Person {
     Name: string;
     Age: number;
     Height: number;
     Weight: number;
     GoalWeight: number;

     //BMI: number;
     //GoalBMI: number;
 }

 export class Workout{
    List: string;
    Time: number;
    Set: number;
 }