import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';
import { Fit, User } from '../models/exercise';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  Me: User;

  constructor(private _Fit: FitService, private _Router: Router) {
    this.Me = this._Fit.Me;
    if(!this.Me){
      _Router.navigate(['/login']);
    }

   }

  ngOnInit() {
  }

  editing(age: number, weight: number, height: number, goalWeight: number, name: string ){
    const goalBmi = this.calculateBMI(goalWeight, height);
    const bmi = this.calculateBMI(weight, height);
    console.log('profile component');
    this._Fit.profileAdd(age, weight, height, goalWeight, bmi, goalBmi, name);
  
  
  }
  calculateBMI(weight: number, height: number){
    return Math.round((weight / height / height * 10000) * 100) / 100;
  }

}
