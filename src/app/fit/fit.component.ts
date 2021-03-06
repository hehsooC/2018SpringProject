import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import {Fit, User } from '../models/exercise';
import { MessagesService } from '../services/messages.service';
import { FitService } from '../services/fit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fit',
  templateUrl: './fit.component.html',
  styleUrls: ['./fit.component.css']
})
export class FitComponent implements OnInit {

    Model: Fit;
    Me: User;
    ExerciseList: string[];

  constructor(private http: Http,
              private _Messages: MessagesService,
              private _Fit: FitService,
              private _Router: Router
) {
    this.Me = _Fit.Me;
    this.Model = _Fit.Model;
    
    this.ExerciseList = _Fit.ExerciseStack;
    if(!this.Me){
      _Router.navigate(['/login']);
    } 
  } 

  ngOnInit() {
  }



  // Record the month and the date ((user input)) of completed workout
  addTime(e: MouseEvent, month: any, date: number){
    e.preventDefault();
    
    // prevent empty submit.
    if(!date || !month){
      alert('Please input month and date');
      return;
    }
    // convert month to corresponding string.
    while(true){
      if(month == 1){
        month = 'January';
        break;
      }else if(month == 2){
        month = 'February';
        break;
      }else if(month == 3){
        month = 'March';
        break;
      }else if(month == 4){
        month = 'April';
        break;
      }else if(month == 5){
        month = 'May';
        break;
      }else if(month == 6){
        month = 'June';
        break;
      }else if(month == 7){
        month = 'July';
        break;
      }else if(month == 8){
        month = 'August';
        break;
      }else if(month == 9){
        month = 'September';
        break;
      }else if(month == 10){
        month = 'October';
        break;
      }else if(month == 11){
        month = 'November';
        break;
      }else if(month == 12){
        month = 'December';
        break;
      }else{
        alert('Please input between 1 - 12');
        return;
      }
    }

    // set number range for date
    if(date < 1 || date > 31){
      alert('Please input between 1 - 31');
      return;
    }

    var key = month +' / '+date;

    // create a new date history
    if(!this.Me.History.find(x => x.KeyDate == key)){
      this.Me.PlanExercise = [];
      this.Me.DoneExerciseList = [];
      this.Me.TotalSetTime = 0;
      this.Me.Month = month;
      this.Me.Date = date;
      this.Me.History.push({ Name: this.Me.Name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: 0, 
        Month: month, Date: date, KeyDate: key.toString()});
      this._Fit.SetDay(this.Me.Name, key, month, date);
    }
    //if the recorded day already exists, set recorded day to a user
    else{
      // find user's history from History[] then return to the user.
      alert('It seems you already have a workout record on that day');
    }
  }

  // submit previous date to get workout history of that day
  submitDate(e: MouseEvent, key: string){
    if(this.Me.History.find(x => x.KeyDate == key)){
      this._Fit.getHistory(key);
    }
    else{
      console.log('no history found');
    }
  }

  // submit planned workout list 
  submitWorkout(e: MouseEvent, text: string){
    e.preventDefault();
    // prevent submitting same list again and again.
    if(this.Me.PlanExercise.find(x => x.Text == text)){
      return;
    }
    else{
      // to display current date and Me's workout list
      this.Me.PlanExercise.push({Text: text, Chosen: false});
    }

    var key = this.Me.Month+' / '+this.Me.Date;

    // find the user's plan history from History[] by key
    if(this.Me.History.find(x => x.KeyDate == key).PlanExercise.length == 0){
      this.Me.History.find( x => x.KeyDate == key).PlanExercise.push({Text:text, Chosen: false});
      this._Fit.planHistory(text, key);
    }
    else{
      var result = this.Me.History.find(x => x.KeyDate == key);
      this.Me.Month = result.Month;
      this.Me.Date = result.Date;
      this.Me.DoneExerciseList = result.DoneExerciseList;
      this.Me.PlanExercise = result.PlanExercise;
      this.Me.TotalSetTime = result.TotalSetTime;
      this._Fit.planHistory(text, key);
    }
    
  }

  // doneExercise() will track the completed workout that a user checks it as "done"
  doneExercise(e: MouseEvent, text: string, time: number, set: number){
    e.preventDefault();
    if(!time || !set){
      alert('Please enter time and set');
      return;
    }
    if((time < 1 || set < 1)){
      alert('Please enter positive number');
      return;
    }
    var key = this.Me.Month+' / '+this.Me.Date;
    var totalTime = time * set;
    // if text is chosen, change the color by submitting the text to server and changing Chosen to true.
    this._Fit.makeChosen(text, key);
    
    // Find user's history and return to the user so that user can see each date's data.
    if(!this.Me.History.find(x => x.KeyDate == key).DoneExerciseList.find(x=> x.Text == text)){
      this.Me.TotalSetTime = this.Me.TotalSetTime + Number(totalTime);
      this.Me.History.find(x => x.KeyDate == key).TotalSetTime = Number(totalTime);
      this.Me.History.find(x => x.KeyDate == key).DoneExerciseList.push({Text: text, Time: time, Set: set, TotalTime: totalTime});

      this._Fit.getTotalTime(this.Me.Name, key, this.Me.TotalSetTime);
      this._Fit.RecordDay(text, key, time, set, totalTime);
    }
    else{

      // if the workout list is already submitted, find the data via key.
      var user = this.Me.History.find(x=>x.KeyDate == key).DoneExerciseList.find(x=> x.Text == text);
      this.Me.History.find(x => x.KeyDate == key).TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);

      user.Time = Number(user.Time) + Number(time);
      user.Set = Number(user.Set) + Number(set);
      user.TotalTime = Number(user.TotalTime) + Number(totalTime);
      this.Me.TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
      var result = this.Me.History.find(x => x.KeyDate == key);
      this.Me.Month = result.Month;
      this.Me.Date = result.Date;
      this.Me.DoneExerciseList = result.DoneExerciseList;
      this.Me.PlanExercise = result.PlanExercise;
      this.Me.TotalSetTime = result.TotalSetTime;

      this._Fit.getTotalTime(this.Me.Name, key, this.Me.TotalSetTime);
      this._Fit.RecordDay(text, key, time, set, totalTime);
      
    }
  }


  dismiss(e: MouseEvent, text: string, time: number, set: number){
    var key = this.Me.Month+' / '+this.Me.Date;

    console.log('dismiss');
    this._Fit.dissmissPlan(text, key);
  }
  // when user hits Reset button, reset the page.
  reset(e: MouseEvent){
    
    // call set day to either start a new date or to retrieve history
    this.Me.Month = null;
    this.Me.Date = null;
  }

  
}
