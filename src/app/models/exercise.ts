export class Fit {
    
    Person: User[] = [];
    Share: People[] = [];
}

// Each User (Me)'s interface
export class User {
    Name: string;
    Password: string;
    Profile: Info;
    PlanExercise: Exercise[] = [];
    DoneExerciseList: Done[] = [];
    Record: Log[] = [];
    TotalSetTime: number;
    EachShare: People[] = [];
    Notice: Friend[];
    Requested: boolean;
    FriendList: People[] =[];
    History: Log[] = [];
    Month: any;
    Date: number;
    Summary: Log;
    FriendSummary: Log;
}

// For keeping the user's workout record
export class Log{
    Name: string;
    DoneExerciseList: Done[] = [];
    PlanExercise: Exercise[] = [];
    TotalSetTime: number;
    Month: any;
    Date: number;
    KeyDate: string;
}
// For Other Users in the server
export class People {
    Name: string;
    RequestSent: boolean;
}
// for Friend Request
export class Friend{
    Name: string;
    Friend: string;
    Msg: string;
}
// for planned exercise lists
export class Exercise {
    Text: string;
    Chosen: boolean = false;
}
// for completed exercise lists
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