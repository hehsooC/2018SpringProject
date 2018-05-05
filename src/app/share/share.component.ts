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
  popRequest: boolean = false;
  FriendName: string;
  interval: any;
  

  constructor(private _Fit: FitService, private _Router: Router) { 
    this.Me = _Fit.Me;
    
    // if there user is not logged in or not signed up, direct user to login.
    if(!this.Me){
      _Router.navigate(['/login']);
    } 


  }

  ngOnInit() {
    this.refreshList();
    this.interval = setInterval(()=> {
      this.refreshList();}, 1000);
    }
    
  

  

  refreshList(){

    // refresh user's data 
    this._Fit.getRequestState().subscribe(data => {
      this.Me = data;
    });

    // create other users list to share and refresh to update
    this._Fit.getUserList().subscribe(data => {
      this.Me.EachShare = data;
      // remove myself from the share list
      this.Me.EachShare.splice(this.Me.EachShare.indexOf(this.Me.EachShare.find(x=> x.Name == this.Me.Name)), 1);
      
    });
  }


  friendRequest(e: MouseEvent, friendName: string){
    console.log('-===in friendRequest===friend name ' + friendName);
    this._Fit.friendRequest(friendName);
    this.clicked = !this.clicked;

  }

  

  requestBox(e: MouseEvent) {
    var friend = this.Me.Notice[0].Friend;
    this.Me.Notice.unshift();
    console.log('friend name** ' + friend);
    if (confirm("You have a friend request!")) {
        this._Fit.addFriendList(friend);
    } else {
        // dismiss request
    }
}

}
