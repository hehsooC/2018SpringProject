import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { FitService } from '../services/fit.service';
import {Fit, User, People } from '../models/exercise';
import { Router } from '@angular/router';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  
  Me: User;
  clicked: boolean = false;
  accept: boolean = false;
  //Share: People[];

  constructor(private _Fit: FitService, private _Router: Router) { 
    this.Me = _Fit.Me;
    //this.Share = _Fit.Share;
    
    // if there user is not logged in or not signed up, direct user to login.
    if(!this.Me){
      _Router.navigate(['/login']);
    } 
    // every time user goes to Share, other users will be updated and displayed in share list.
    if(this.Me)
      this.createShareList(this.Me.Name)

  }

  ngOnInit() {
  }


  // create other users list to share
  createShareList(name: string){
    console.log('_component_creating sharelist');
    this._Fit.getUserList(name);
  }


  friendRequest(e: MouseEvent, friendName: string){
    console.log('friend name ' + friendName);
    this._Fit.friendRequest(friendName);
    this.clicked = !this.clicked;
  }

  acceptFriend(){
    

  }

}
