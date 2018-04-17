 export class Fit{
     User: Person[] = []; 
     ExerciseList: string[] = [
        "Chest Stretch with the Pilates Band",
        "Shoulder and thoracic spine mobilization with Pilates Band",
        "Back and Leg Extensions with the Pilates Band",
        "Spine Stretch and Saw with the Pilates Band",
        "Chest Exercise with the Pilates Circle"
        
     ];
     
     Track: string[] = [];

 }

 export class Person {
     Name: string;
     Age: number;
     Weight: number;
     isPlan: boolean = false; // check if a user choose workout plans 
 }