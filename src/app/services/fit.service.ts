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

  signUp(name: string, password: string){
    if(this.Model.Person.find(x => x.Name == name)){
      // alert user name taken
      alert("User Name is taken, please try different name");
      console.log('already taken')
    }
    else{
      this.Me = {Name: name, Password: password, Profile: <Info>{}, 
      PlanExercise: [], DoneExerciseList: []};
      this.Model.Person.push(this.Me);
      console.log('sign up successful')
      //this.signUp(name, password);
      this._Router.navigate(['/profile']);
      }
      
    }
    
  login(name: string, password: string){
    if(this.Model.Person.find(x => x.Name == name)){
      var user = this.Model.Person.find( x => x.Name == name);
      if(user.Password == password){
        this.Me = user;
        console.log('login successful')
        this._Router.navigate(['/fit']);
      }
      else{
        console.log('login failed');
        alert("Password doesn't match in our system!");
      }
    }
    else{
      alert("No Username found in our system!")
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



    chooseExercise(text: string){
      if(!this.Me.PlanExercise.find(x => x.Text == text)){
        this.Me.PlanExercise.push({Text: text, Chosen: false});
      }
    }
  
    selectExercise(text: string, time:number, set:number){
      var totalTime = time * set;
      console.log('totalTime is : ' +totalTime);
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
      
    }
    
    timeCalculate(text: string, time: number, set: number){
      var record = this.Model.Record.pop();

      var currentTime = Number(record.Time);
      console.log('record current time is : ' +currentTime);
      
      var currentSet = Number(record.Set);
      console.log('record current set is : ' +currentSet);

      var record2 = this.Model.Record.pop();

      var prevTime = Number(record2.Time) ;
      console.log('record prev time is : ' + prevTime);

      var prevSet = Number(record2.Set);
      console.log('record prev set is : ' +prevSet);

      var sum = Number(currentTime + prevTime);
      console.log('sum is : ' +sum);

      var setSum = Number(currentSet + prevSet);
      console.log('setsum is : ' +setSum);

      var totalTime = Number(sum * setSum);
      console.log('totalTime is : ' +totalTime);

      this.Model.Record.push({Text: text, Time: sum, Set: setSum, TotalTime: totalTime });
      return this.Model.Record;
    }
  }

  

  
  

