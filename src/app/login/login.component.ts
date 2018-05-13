import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';
import { Fit } from '../models/exercise';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Fit: FitService) { }

  ngOnInit() {
  }

  // pass name and password to Service for a user to sign-in
  login(name:string, password: string){
    if(!name || !password){
      alert('Please Enter Username and Password');
      return;
    }
    this._Fit.login(name, password);
  }

}
