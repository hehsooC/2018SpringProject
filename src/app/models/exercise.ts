export class Fit {
    
    Person: User[] = [];
    //ExerciseList: string[] = [];
    Record: Track[] = [];
    
    /** Need to find health info database api
    HealthInfo: {
        url: string;
    }
    */
 
 
}

/* export class Different{
    Name: string;
}
 */

 export class Track{
     Text: string;
     Time: number;
     Set: number;
     TotalTime: number;
     
     //Name: string;

 }
export class User {
    Name: string;
    Password: string;
    Profile: Info;
    PlanExercise: Exercise[] = [];
    DoneExerciseList: Done[] = [];
    TotalSetTime: number;

    
}


export class Exercise {
    Text: string;
    Chosen: boolean = false;
}

export class Done {
    Text: string;
    Time: number;
    Set: number;
    TotalTime: number;
    //Name: string;
}

export class Info {
    Age: number;
    Weight: number;
    Height: number;
    GoalWeight: number;
    BMI: number;
    GoalBMI: number;
    
}