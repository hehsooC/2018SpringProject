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
  signUp: boolean = false;
  hideLogin: boolean = true;
  hide: boolean = false;
  finishProfile: boolean = false;
  login: boolean = false;
  hideSignIn: boolean = false;
  hideSignUpForm: boolean = false;
  planAdded: boolean = false;

  constructor() {
  }

  ngOnInit() {


  }

  hasId(){
    this.alreadyUser = !this.alreadyUser;
    this.hideSignIn = !this.hideSignIn;
  }
  
  saveProfile(){
    this.signUp = !this.signUp;
    this.hideLogin = !this.hideLogin;
    this.hide = !this.hide;
  }

  isLogin(){
    this.login = !this.login;
    this.hide = !this.hide;
    this.planAdded = !this.planAdded;
    
  }

  doneProfile(){
    this.finishProfile = !this.finishProfile;
    this.hideSignUpForm = !this.hideSignUpForm;
    this.planAdded = !this.planAdded;

  }

  addPlan(e: MouseEvent, plan: string){
    e.preventDefault();
    console.log(plan);
    this.Model.Track.push(plan);
   
    console.log(this.Model.Track);
  }

  
 
}
