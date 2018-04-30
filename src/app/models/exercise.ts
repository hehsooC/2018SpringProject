export class Fit {
    
    Person: User[] = [];
    ExerciseList: string[] = [];
    
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
export class User {
    Name: string;
    Password: string;
    Profile: Info;
    PlanExercise: Exercise[] = [];
    DoneExerciseList: Done[] = [];
    
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
}

export class Info {
    Age: number;
    Weight: number;
    Height: number;
    GoalWeight: number;
    BMI: number;
    GoalBMI: number;
    
}