import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';
import { User } from "../models/exercise";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  Me: User;
  constructor( private _Fit: FitService) { 
    this.Me = _Fit.Me;
  }

  ngOnInit() {
  }

  adding(age: number, weight: number, height: number, goalWeight: number, name: string ){
    this._Fit.profileAdd(age, weight, height, goalWeight, name);
    
    }
  
    
}
