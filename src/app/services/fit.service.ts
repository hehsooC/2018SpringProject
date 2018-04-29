import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { User } from '../models/exercise';
import { Router } from '@angular/router';

@Injectable()
export class FitService {

  Me: User;
  constructor(private http: Http, 
              private _Messages: MessagesService, 
              private _Router: Router) { 

  }

  login(name: string){
    this.Me = {Name: name};
    this._Router.navigate(['/fit']);
  }

}
