export class Fit {

    Person: User[] = [];
    PlanExercise: Exercise[] = [];
    Profile: Info[] =[];
    DoneExerciseList: Exercise[] = [];
}

export class User {
    Name: string;
    ExerciseList: string[];
}

export class Exercise {
    Text: string;
    UserId: string;
    Chosen: boolean = false;
}


export class Info {
    Age: number;
    // Weight: number;
    // Height: number;
    // GoalWeight: number;
    // BMI: number;
    // GoalBMI: number;

}