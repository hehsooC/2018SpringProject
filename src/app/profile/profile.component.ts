import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';
import { Fit, User } from '../models/exercise';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Me: User;

  constructor( private _Fit: FitService, private _Messages: MessagesService) {
    this.Me = this._Fit.Me;
    this._Messages.Messages.push('Complete your Profile before you begin to plan your workout.');
    
   }

  ngOnInit() {
  }

  // pass user's profile information to Service after calculating all bmi.
  adding(age: number, weight: number, height: number, goalWeight: number, name: string ){
    // prevent empty profile submit
    if(!weight || !height || !goalWeight || !age){
      alert('Please Fill All Information Above' );
      return;
    }
    const goalBmi = this.calculateBMI(goalWeight, height);
    const bmi = this.calculateBMI(weight, height);
    this._Fit.profileAdd(age, weight, height, goalWeight, bmi, goalBmi, name);
  }
  // calculate BMI.
  calculateBMI(weight: number, height: number){
    return Math.round((weight / height / height * 10000) * 100) / 100;
  }


}
