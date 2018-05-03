import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { Fit, User, Info, Exercise } from '../models/exercise';
import { Router } from '@angular/router';
import { DefaultUrlHandlingStrategy } from '@angular/router/src/url_handling_strategy';

@Injectable()
export class FitService {

  private _api = "http://localhost:8080/fit";

  ExerciseStack =  [];

  Me: User;
  Model: Fit;
  TotalTime: number;

  constructor(private http: Http, 
              private _Messages: MessagesService, 
              private _Router: Router,
              ) { 
                this.ExerciseStack =  [
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
                

  }

  signUp(name: string, password: string){
    this.Me = {Name: name, Password: password, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null }, 
    PlanExercise: [], DoneExerciseList: [], TotalSetTime: 0};
    this.http.get(this._api + "/exercise", { params : { name: name, password: password } })
    .subscribe(data=> {
      if(!data.json()){
              // alert user name taken
        alert("User Name is taken, please try different name");
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
        alert('Username or Password doesn\'t match in our system! - service ');
        return;
      }
      this.Me = data.json()
      this._Router.navigate(['/fit']);

    
    })
   
  }

  profileAdd(age: number, weight: number, height: number, goalWeight: number, bmi: number, goalBmi: number, name: string){
    this.http.post(this._api + "/exercise/profile", { Age: age, Weight: weight, Height: height, 
                                                              GoalWeight: goalWeight, BMI: bmi, 
                                                              GoalBMI: goalBmi, name: name})
    .subscribe(data => {
        this.Me.Profile = data.json();
    });
    this._Router.navigate(['/fit']);
    
  }

  chooseExercise(text: string){
    this.http.post(this._api + "/exercise/choose", {name: this.Me.Name, Text: text})
              .subscribe(data => {
                if(!data.json()){
                  return;
                }
                this.Me.PlanExercise = data.json();
              });

  }
  
/*     makeChosen(text: string){
      console.log('make chosen = service');
      this.http.post(this._api + "/exercise/chosen", {name: this.Me.Name, text: text})
      .subscribe(data => {
        this.Me.PlanExercise = data.json();
      })
    } */
    selectExercise(text: string, time:number, set:number){
      console.log('_service_ selected text is ' + text);
      this.http.post(this._api + "/exercise/done", {name: this.Me.Name, text: text, time: time, set: set })
                .subscribe(data => {
                  if(!data.json()){
                    console.log('done data is false - service');
                    return;
                  }
                  console.log('successfully done - service ');
                  this.Me.DoneExerciseList = data.json();
                  // need to slice list off
                });
    }

/*     getTotalTime(){
      this.http.post(this._api + "/exercise/totaltime",{name: this.Me.Name})
      .subscribe(data => {
        this.Me.TotalSetTime = Number(data.json());
      })
    } */
  

}
  

