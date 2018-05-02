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
    
    

    //setInterval(()=> this.refresh(), 1000)
  } 

  ngOnInit() {
  }
/* 
  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }
 */
  submitWorkout(e: MouseEvent, text: string){
    console.log('submitting workout list - component');
    e.preventDefault();
    this._Fit.chooseExercise(text);
    
  }


  doneExercise(e: MouseEvent, text: string, time: number, set: number){
    console.log('done exercise - component');
    e.preventDefault();
    this._Fit.makeChosen(text);
    this._Fit.selectExercise(text, time, set);

  }

  


  
/* 
  getDate(){
    var d = new Date();
    document.getElementById("date").innerHTML = d.toDateString();

  } */

 /*  giveExerciseList(name: string){
    console.log('giveExerciseList executed');
    this.http.get(this._api + "/exercise/getList", { params: { userId: name }})
    .subscribe(data => this.GetExercise = { List: data.json()});
  }
 */
  /*
  differentUser(name: string){
    this.http.get(this._api + "/exercise/share", { params : { userId: name } })
    .subscribe(data=> this.Others =  {Name: name} )
  }
*/

/*     
  AlreadyUser = () => this.Model.Profile.find( x => x.UserId == this.Me.Name);
  MyPlanExercise = () => this.Model.PlanExercise.find( x => x.UserId == this.Me.Name );
  ChosenExercise = () => this.Model.PlanExercise.find( x => x.Chosen ); */
}
