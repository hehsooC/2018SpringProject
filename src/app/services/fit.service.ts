import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { Fit, User, Info, Exercise } from '../models/exercise';
import { Router } from '@angular/router';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

@Injectable()
export class FitService {

  private _api = "http://localhost:8080/fit";

  ExerciseStack =  [
    "Squat",
    "Plank", 
     "Running",
     "Jump Rope",
     "Swimming",
     "Walk",
     "Aerobic Dance",
     "Zumba",
     "Yoga",
     "Centergy",
     "Stretching",
     "Gentle Yoga",
     "Push Up"
     ];

  Me: User;
  Model: Fit;
  //DisplayProfile: Info;
  //Model = new Fit();
  constructor(private http: Http, 
              private _Messages: MessagesService, 
              private _Router: Router,
              ) { 
    //this.Model.ExerciseList = this.ExerciseStack;
                

  }

  signUp(name: string, password: string){
    this.Me = {Name: name, Password: password, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null }, 
    PlanExercise: [], DoneExerciseList: []};
    this.http.get(this._api + "/exercise", { params : { name: name, password: password } })
    .subscribe(data=> {
      if(!data.json()){
              // alert user name taken
        alert("User Name is taken, please try different name");
        console.log('already taken')
        return;
      }
      this._Router.navigate(['/profile']);
    })
     
      
    }
    
  login(name: string, password: string){
    this.http.get(this._api + "/exercise/login", { params : { name: name, password: password } })
    .subscribe(data=> {
      var check = data.json()
      if(!check){
        //alert("No Username found in our system! - model")
        console.log('alert! login - service')
        alert("Username or Password doesn't match in our system! - model.js");
        return;
      }
      this.Me = data.json()
      this._Router.navigate(['/fit']);

    
    })
   
  }

  profileAdd(age: number, weight: number, height: number, goalWeight: number, bmi: number, goalBmi: number, name: string){
    //const goalBmiCalculate = this.calculateBMI(goalWeight, height);
    //const bmiCalculate = this.calculateBMI(weight, height);
    console.log('got the profile component in service');
    this.http.post(this._api + "/exercise/profile", { Age: age, Weight: weight, Height: height, 
                                                              GoalWeight: goalWeight, BMI: bmi, 
                                                              GoalBMI: goalBmi, name: name})
    .subscribe(data => {
      console.log('subscribe in profile - service');
     
        console.log('successfully got profile - service');
        this.Me.Profile = data.json();
    });
    this._Router.navigate(['/fit']);

    
   // this.Me.Profile = {Age: age, Weight: weight, Height: height, GoalWeight: goalWeight, BMI: bmiCalculate, GoalBMI: goalBmiCalculate};
  }

  /* calculateBMI(weight: number, height: number){
    return Math.round((weight / height / height * 10000) * 100) / 100;
  } */



    chooseExercise(text: string){
      if(!this.Me.PlanExercise.find(x => x.Text == text)){
        this.Me.PlanExercise.push({Text: text, Chosen: false});
      }
    }
  
    selectExercise(text: string, time:number, set:number){
      /* var totalTime = time * set;
      this.Model.Record.push({Text: text, Time: time, Set: set, TotalTime: totalTime});
      if(!this.Me.DoneExerciseList.find(x => x.Text == text)){
        this.Me.DoneExerciseList.push({Text: text, Time: time, Set: set, TotalTime: totalTime});
      }
      else{ 
        var RecordReceived = this.timeCalculate(text, time, set);
        var recordIndex = RecordReceived.findIndex(x => x.Text == text);
        var index = this.Me.DoneExerciseList.findIndex(x => x.Text == text);
        this.Me.DoneExerciseList[index] = RecordReceived[recordIndex];
      }
       */
    }
    
    timeCalculate(text: string, time: number, set: number){
/*       var record = this.Model.Record.pop();

      var currentTime = Number(record.Time);
      var currentSet = Number(record.Set);

      var record2 = this.Model.Record.pop();
      var prevTime = Number(record2.Time) ;
      var prevSet = Number(record2.Set);

      var sum = Number(currentTime + prevTime);
      var setSum = Number(currentSet + prevSet);
      var totalTime = Number(sum * setSum);

      this.Model.Record.push({Text: text, Time: sum, Set: setSum, TotalTime: totalTime });
      return this.Model.Record;
    } */
  }

  

}
  

