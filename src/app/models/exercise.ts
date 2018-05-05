export class Fit {
    
    Person: User[] = [];
    //ExerciseList: string[] = [];

    Share: People[] = [];
   // Request: Friend[];
    
    /** Need to find health info database api
    HealthInfo: {
        url: string;
    }
    */
 
 
}



export class User {
    Name: string;
    Password: string;
    Profile: Info;
    PlanExercise: Exercise[] = [];
    DoneExerciseList: Done[] = [];
    Record: Done[] = [];
    TotalSetTime: number;
    EachShare: People[] = [];
    Notice: Friend[];
    Requested: boolean;
    FriendList: People[] =[];
}

export class People {
    Name: string;
    
}

export class Friend{
    Name: string;
    Friend: string;
    Msg: string;
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