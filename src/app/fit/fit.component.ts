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
    added: boolean = false;

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

 


  submitWorkout(e: MouseEvent, text: string){
    e.preventDefault();
    this._Fit.chooseExercise(text);
    
  }

 /* doneExercise() will track the completed workout that a user checks it as "done"
    */
  doneExercise(e: MouseEvent, text: string, time: number, set: number){
    e.preventDefault();
    this._Fit.makeChosen(text);

    var totalTime = time * set;

    // if the workout list is a newly selected, add it to DoneExerciseList
    if(!this.Me.DoneExerciseList.find( x=> x.Text == text)){
      this.Me.DoneExerciseList.push({Text:text, Time:time, Set:set, TotalTime:totalTime});

      // tracking the total workout time 
      this.Me.TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
    
      this._Fit.selectExercise(this.Me.DoneExerciseList);
      
    }
    // else if user adds more time and set of the selected workout, keep tracking of time, set, and Total time
    else{
      
      var user = this.Me.DoneExerciseList.find(x=> x.Text == text);

      // keep tracking of total workout time
      user.Time = Number(user.Time) + Number(time);
      user.Set = Number(user.Set) + Number(set);
      user.TotalTime = Number(user.TotalTime) + Number(totalTime);
      this.Me.TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
      this._Fit.getTotalTime(this.Me.TotalSetTime);
      this._Fit.selectExercise(this.Me.DoneExerciseList);
      
    }


  }

  // Record the month and the date ((user input)) of completed workout
  addTime(e: MouseEvent, month: any, date: number){
    e.preventDefault();
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
        alert('wrong month, please type between 1 - 12');
        break;
      }
    }
    this._Fit.RecordDay(month, date);
    // this.added = !this.added;

  }

  
}
