export class Fit {
    
    Person: User[] = [];
    ExerciseList: string[] = [];
    
    /** Need to find health info database api
    HealthInfo: {
        url: string;
    }
    */
 
 
}

export class Different{
    Name: string;
}

export class User {
    Name: string;
    Password: string;
    Profile: Info;
    PlanExercise: Exercise[] = [];
    DoneExerciseList: Exercise[] = [];
    //PlanExercise: Exercise[];   
}


export class Exercise {
    Text: string;
    UserId: string;
    Chosen: boolean = false;
}


export class Info {
    Age: number;
    Weight: number;
    Height: number;
    GoalWeight: number;
    BMI: number;
    GoalBMI: number;
    
}