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
    // date: Date;

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
     // setInterval(()=> this.refreshList(), 1000);
    
    //  this.date = new Date();


  } 

  ngOnInit() {
  }


  refreshList(){
   
   /*    this._Fit.getDay().subscribe(data=>{
        this.Me.Date = data;
      })
      this._Fit.getMonth().subscribe(data=>{
        this.Me.Month = data;
      })
    */
      /* this._Fit.getUserStatus().subscribe(data=>{
        this.Me = data;
      })  */
    

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
        alert('Please input between 1 - 12');
        break;
      }
    }

    var key = month +' / '+date;
    var user = this.Me;
    // user.Month = month;
    // user.Date = date;

    //if the recorded day already exists, set recorded day to a user
    if(!user.History.find(x => x.KeyDate == key)){
      console.log('_comp_ history not found, create one');
      user.Month = month;
      user.Date = date;
      user.History.push({ Name: this.Me.Name, DoneExerciseList: this.Me.DoneExerciseList, PlanExercise: this.Me.PlanExercise, TotalSetTime: this.Me.TotalSetTime, 
        Month: month, Date: date, KeyDate: key.toString()});
      this._Fit.SetDay(user, key);

    }
    else{
      //this.Me.Month = month;
      //this.Me.Date = date;
      //var i = this.Me.History.find(x=> x.KeyDate == key).indexOf(key);

      // find user's history from History[] then return to the user.
      var result = this.Me.History.find(x => x.KeyDate == key);
      console.log(result);
      this.Me.Month = result.Month;
      this.Me.Date = result.Date;
      this.Me.DoneExerciseList = result.DoneExerciseList;
      this.Me.PlanExercise = result.PlanExercise;
      this.Me.TotalSetTime = result.TotalSetTime;
      this._Fit.SetDay(user, key);

      

  
    }
    
    // create a history for specific month and date
    // var monthMatch = user.History.find(x=>x.Month == month);
    // var dateMatch = user.History.find(x=>x.Date == date);
    /* if(!monthMatch){
        user.History.push({ Name: this.Me.Name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: null, 
            Month: month, Date: date, KeyDate: key.toString()});
    }
    else{
        // if the specific date history already existed, don't create a new one, but find this history and return it to user.
        if(dateMatch){
            console.log('datematch is ');
            console.log(dateMatch);
            this.Me.History = dateMatch;
          }

        else{
            console.log('no history found');
        }
    }
 */

  }

  submitWorkout(e: MouseEvent, text: string){
    e.preventDefault();
    var key = this.Me.Month+' / '+this.Me.Date;
    if(this.Me.PlanExercise.find(y => y.Text == text)){
      return;
    }
    else{
      this.Me.PlanExercise.push({Text: text, Chosen: false});
      
    }

    // find the user's plan history from History[] by key
    /* if(!this.Me.History.find(x => x.KeyDate == key)){
      
      this.Me.History.find(x=> x.KeyDate == key).PlanExercise = this.Me.PlanExercise;

    }
    else{
      console.log('_comp_history found, return plan');
      var result = this.Me.History.find(x => x.KeyDate == key);
      this.Me.Month = result.Month;
      this.Me.Date = result.Date;
      this.Me.DoneExerciseList = result.DoneExerciseList;
      this.Me.PlanExercise = result.PlanExercise;
      this.Me.TotalSetTime = result.TotalSetTime;
    } */
    this._Fit.chooseExercise(text);
    this._Fit.planHistory(text, key);
    
  }

 // doneExercise() will track the completed workout that a user checks it as "done"
  doneExercise(e: MouseEvent, text: string, time: number, set: number){
    e.preventDefault();
    // fix this to client -> server ?
    this._Fit.makeChosen(text);
    var key = this.Me.Month+' / '+this.Me.Date;
    var totalTime = time * set;

    // if the workout list is a newly selected, add it to DoneExerciseList
    if(!this.Me.DoneExerciseList.find( x=> x.Text == text)){
      this.Me.DoneExerciseList.push({Text:text, Time:time, Set:set, TotalTime:totalTime});

      // tracking the total workout time 
      this.Me.TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
    
      this._Fit.getTotalTime(this.Me, key, this.Me.TotalSetTime);
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
      this._Fit.getTotalTime(this.Me, key, this.Me.TotalSetTime);
      this._Fit.selectExercise(this.Me.DoneExerciseList);
      //this._Fit.putHistory(this.Me.DoneExerciseList);
      
    }

    var key = this.Me.Month+' / '+this.Me.Date;

    // find user's complete exercise list  from History, and show it to user.
    if(this.Me.History.find(x => x.KeyDate == key)){
      this.Me.History.find(x => x.KeyDate == key).Name = this.Me.Name;
      this.Me.History.find(x => x.KeyDate == key).DoneExerciseList = this.Me.DoneExerciseList;
      this.Me.History.find(x => x.KeyDate == key).PlanExercise = this.Me.PlanExercise;
      this.Me.History.find(x => x.KeyDate == key).TotalSetTime = this.Me.TotalSetTime;
      this.Me.History.find(x => x.KeyDate == key).Month = this.Me.Month;
      this.Me.History.find(x => x.KeyDate == key).Date = this.Me.Date;
      // send this history to server 
      this._Fit.RecordDay(this.Me, key);


    }
    // console.log('_comp_doneEx_this.Me.History');
    // console.log(this.Me.History);
  }

  // when user hits Reset button, reset the page (workout lists)
  reset(e: MouseEvent){
    

  }

  
}
