import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import {Fit, User, Exercise, Info, Different, WorkoutList } from '../models/exercise';

@Component({
  selector: 'app-fit',
  templateUrl: './fit.component.html',
  styleUrls: ['./fit.component.css']
})
export class FitComponent implements OnInit {

    Model = new Fit();
    Me: User;
    Workout: Exercise;
    DisplayProfile: Info;
    GetExercise: WorkoutList;  
    
    logInName: string;
    signIn: boolean = false;
    finishProfile: boolean = false;
    alreadyuser: boolean = false;

    private _api = "http://localhost:8080/fit";

  constructor(private http: Http) {
    setInterval(()=> this.refresh(), 1000)
  } 

  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }

  submitWorkout(e: MouseEvent, text: string){
    console.log('submitting workout list');
    e.preventDefault();

    this.http.post(this._api + "/exercise", { Text: text, UserId: this.Me.Name })
        .subscribe();
  }

  doneExercise(e: MouseEvent, plan: Exercise){
    console.log('done exercise');
    e.preventDefault();
    this.http.post(this._api + "/exercise/choose", { Text: plan.Text, UserId: this.Me.Name })
        .subscribe(data => this.Workout = {Text: plan.Text, UserId: this.Me.Name, Chosen: true});
  }


  signUp(name: string){
    console.log('Sign Up successful');
    this.http.get(this._api + "/exercise", { params : { userId: name } })
    .subscribe(data=> this.Me =  {Name: name} )
    this.logInName = name;
    this.signIn = !this.signIn;
    this.giveExerciseList(name);
  }
 
  login(name: string){
    console.log('log in successful');
    this.http.get(this._api + "/exercise/login", { params : { userId: name } })
    .subscribe(data=> this.Me =  {Name: name} )
    this.alreadyuser = !this.alreadyuser;
  }
 
  giveExerciseList(name: string){
    console.log('giveExerciseList executed');
    this.http.get(this._api + "/exercise/getList", { params: { userId: name }})
    .subscribe(data => this.GetExercise = { List: data.json()});
  }

  /*
  differentUser(name: string){
    this.http.get(this._api + "/exercise/share", { params : { userId: name } })
    .subscribe(data=> this.Others =  {Name: name} )
  }
*/
  profileAdd(age: number, weight: number, height: number, goalWeight: number ){
    this.finishProfile = !this.finishProfile;
    const goalBmiCalculate = this.calculateBMI(goalWeight, height);
    const bmiCalculate = this.calculateBMI(weight, height);
    this.http.post(this._api + "/exercise/profile", {Age: age, Weight: weight, Height: height, GoalWeight: goalWeight,
      BMI: bmiCalculate, GoalBMI: goalBmiCalculate , UserId: this.Me.Name})
    .subscribe(data => this.DisplayProfile = {Age: age, Weight: weight, Height: height, GoalWeight: goalWeight,
      BMI: bmiCalculate, GoalBMI: goalBmiCalculate});
    }
    
  calculateBMI(weight: number, height: number){
    return Math.round((weight / height / height * 10000) * 100) / 100;
    }
    

    
    
  MyPlanExercise = () => this.Model.PlanExercise.find( x => x.UserId == this.Me.Name );
  ChosenExercise = () => this.Model.PlanExercise.find( x => x.Chosen );
}
