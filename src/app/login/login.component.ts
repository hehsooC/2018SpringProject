import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Fit: FitService) { }

  ngOnInit() {
  }

  login(name:string){
    this._Fit.login(name);
  }

// need to prevent sign up same userid here?
  newUser(name: string){
    this._Fit.signUp(name);
    
}

}
