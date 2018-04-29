export class Fit {
    
    Person: User[] = [];
    PlanExercise: Exercise[] = [];
    Profile: Info[] =[];
    DoneExerciseList: Exercise[] = [];
    ExerciseList: WorkoutList[];  
    
    /** Need to find health info database api
    HealthInfo: {
        url: string;
    }
    */
 
 
}

export class WorkoutList{ 
    List: string[];
}
export class Different{
    Name: string;
}

export class User {
    Name: string;
    Password: string;
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
    UserId: string;
    
}