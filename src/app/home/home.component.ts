import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

import { Fit } from "../models/exercise";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Model = new Fit();
  //private _api = "http://localhost:8080/home"
  alreadyUser: boolean = false;
  hideWelcome: boolean = false;
  hide: boolean = false;
  login: boolean = false;
  finishProfile: boolean = false;
  logInName: string;

  constructor() {
  }

  ngOnInit() {


  }

  hasId(){
    this.hide = !this.hide;
  }

  isLogin(name: string){
    this.login = !this.login;
    this.hideWelcome = !this.hideWelcome;
    this.logInName = name;
    
  }

  doneProfile(logInName: string, age: number, height: number, weight: number, goalWeight: number ){
    this.finishProfile = !this.finishProfile;
    this.Model.User.push({Name: logInName, Age: age, Height: height, Weight: weight, GoalWeight: goalWeight });
    console.log('name is ' + name);
    console.log(this.Model.User);

  }

  addPlan(e: MouseEvent, plan: string){
    e.preventDefault();
    console.log('adding: ' + plan);
    this.Model.Track.push(plan);
   
    console.log(this.Model.Track);
  }

  removeList(e: MouseEvent, list: string){
    console.log('removing: ' + list);
    this.Model.Track.splice( this.Model.Track.indexOf(list), 1 );

  }
 
}
