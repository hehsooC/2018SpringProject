import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';
import { Fit, User } from '../models/exercise';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Me: User;
  constructor( private _Fit: FitService) {
    this.Me = this._Fit.Me;
   }

  ngOnInit() {
  }

  adding(age: number, weight: number, height: number, goalWeight: number, name: string ){
  this._Fit.profileAdd(age, weight, height, goalWeight, name);
  
  
  }

}
