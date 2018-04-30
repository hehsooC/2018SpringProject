import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';
import { Fit } from '../models/exercise';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Model = new Fit();
  constructor(private _Fit: FitService, private _Messages: MessagesService) { }

  ngOnInit() {
  }

  login(name:string, password: string){
    this._Fit.login(name, password);
  }

// need to prevent sign up same userid here?


}
