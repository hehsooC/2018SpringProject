import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

import { Fit, Person, Workout } from "../models/exercise";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Model = new Fit();
  Profile: Person;
  Work: Workout; 

  private _api = "http://localhost:8080/fit";

  alreadyUser: boolean = false;
  hideWelcome: boolean = false;
  hide: boolean = false;
  login: boolean = false;
  finishProfile: boolean = false;
  logInName: string;
  constructor(private http: Http) {
    setInterval(() => this.refresh(), 1000) 
  }

  ngOnInit() {


  }

  refresh() {
    this.http.get(this._api + "/state")
    .subscribe (data => this.Model = data.json());
  }
  hasId(){
    this.hide = !this.hide;
  }

  isLogin(name: string){
    this.login = !this.login;
    this.hideWelcome = !this.hideWelcome;
    this.logInName = name;
    this.http.get(this._api + "/exercise", { params : { Name: name }});
    
    
  }

 


  doneProfile(logInName: string, age: number, height: number, weight: number, goalWeight: number ){
    this.finishProfile = !this.finishProfile;
    this.Model.User.push({Name: logInName, Age: age, Height: height, Weight: weight, GoalWeight: goalWeight, 
      BMI: this.calculateBMI(weight, height), GoalBMI: this.calculateBMI(goalWeight, height) });
    console.log('name is ' + name);
    console.log(this.Model.User);

  }

  calculateBMI(weight: number, height: number){
    return Math.round((weight / height / height * 10000) * 100) / 100;
  }

  addPlan(e: MouseEvent, plan: string){
    e.preventDefault();
    console.log('adding: ' + plan);
    this.Model.ExerciseList.push({List: plan});
   
    console.log(this.Model.Track);
  }

  removeList(e: MouseEvent, list: string){
    console.log('removing: ' + list);
    this.Model.Track.splice( this.Model.Track.indexOf(list), 1 );

  }
 
}
