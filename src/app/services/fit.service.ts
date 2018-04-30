import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { Fit, User, Info, Exercise } from '../models/exercise';
import { Router } from '@angular/router';

@Injectable()
export class FitService {

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
  //DisplayProfile: Info;
  Model = new Fit();
  constructor(private http: Http, 
              private _Messages: MessagesService, 
              private _Router: Router,
              ) { 
    this.Model.ExerciseList = this.ExerciseStack;
                

  }

  login(name: string, password: string){
    if(this.Model.Person.find(x => x.Name == name)){
      var user = this.Model.Person.find( x => x.Name == name);
      if(user.Password == password){
        this.Me = user;
        console.log('login successful')
        this._Router.navigate(['/fit']);
      }
    }
    else{
      console.log('login failed');
      alert("User Name or Password doesn't match in our system!");
    }
    
    
  }

  profileAdd(age: number, weight: number, height: number, goalWeight: number, name: string){
    const goalBmiCalculate = this.calculateBMI(goalWeight, height);
    const bmiCalculate = this.calculateBMI(weight, height);
    this.Me.Profile = {Age: age, Weight: weight, Height: height, GoalWeight: goalWeight, BMI: bmiCalculate, GoalBMI: goalBmiCalculate};
    this._Router.navigate(['/fit']);
  }

  calculateBMI(weight: number, height: number){
    return Math.round((weight / height / height * 10000) * 100) / 100;
  }

  signUp(name: string, password: string){
    if(this.Model.Person.find(x => x.Name == name)){
      // alert user name taken
      alert("User Name is taken, please try different name");
      console.log('already taken')
    }
    else{
      this.Me = {Name: name, Password: password, Profile: <Info>{}, PlanExercise: <Exercise[]>{}, DoneExerciseList: <Exercise[]>{}}};
      this.Model.Person.push(this.Me);
      console.log('sign up successful')
      //this.signUp(name, password);
      this._Router.navigate(['/profile']);
    }

    chooseExercise(text: string){

    }
    
  }


  
  

