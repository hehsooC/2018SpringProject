import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import {Fit, User, Exercise, Info } from '../models/exercise';

@Component({
  selector: 'app-fit',
  templateUrl: './fit.component.html',
  styleUrls: ['./fit.component.css']
})
export class FitComponent implements OnInit {

    Model = new Fit();
    Me: User;
    Workout: Exercise;
    Profile:Info;   
    
    logInName: string;
    signIn: boolean = false;
    finishProfile: boolean = false;

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
    e.preventDefault();

    this.http.post(this._api + "/exercise", { Text: text, UserId: this.Me.Name })
        .subscribe();
  }

  doneExercise(e: MouseEvent, plan: Exercise){
    e.preventDefault();
    this.http.post(this._api + "/exercise/choose", { Text: plan.Text, UserId: this.Me.Name })
        .subscribe(data => this.Workout = {Text: plan.Text, UserId: this.Me.Name, Chosen: true});
  }

  login(name: string){
    this.http.get(this._api + "/exercise", { params : { userId: name } })
    .subscribe(data=> this.Me =  {Name: name, ExerciseList: data.json() } )
    this.logInName = name;
    this.signIn = !this.signIn;
  }

  doneProfile(age: number ){
    this.finishProfile = !this.finishProfile;
    this.http.post(this._api + "/exercise/profile", {Age: age })
    .subscribe(data => this.Profile = {Age: age});
    }
//Weight: weight, Height: height,  GoalWeight: goalWeight, 
//BMI: this.calculateBMI(weight, height), GoalBMI: this.calculateBMI(goalWeight, height)
    calculateBMI(weight: number, height: number){
    return Math.round((weight / height / height * 10000) * 100) / 100;
    }
    

  MyPlanExercise = () => this.Model.PlanExercise.find( x => x.UserId == this.Me.Name );
  ChosenExercise = () => this.Model.PlanExercise.find( x => x.Chosen );
}
