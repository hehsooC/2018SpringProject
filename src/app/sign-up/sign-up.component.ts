import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';
import { User } from "../models/exercise";
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  loginName: string;

  Me: User;
  constructor( private _Fit: FitService, private _Messages: MessagesService) { 
    this.Me = _Fit.Me;
    
  }

  ngOnInit() {
  }


    newUser(name: string, password: string){
        this._Fit.signUp(name, password);
        console.log('Sign Up Yay');
       // this._Messages.Messages.push('Successfully Signed Up! Welcome, ' + name + '!');
    }
  
    
}
