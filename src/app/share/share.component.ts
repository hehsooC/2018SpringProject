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
    // every time user goes to Share, other users will be updated and displayed in share list.
    if(this.Me){
      this.createShareList(this.Me.Name)

    }

    //this.refreshList();
    
   

  }

  ngOnInit() {
    /* this.refreshList();
    this.interval = setInterval(()=> {
      this.refreshList();}, 1000); */
    }
    
  

  

  /* refreshList(){
    this._Fit.getUserList
    // this._Fit.refreshList(name);
  } */
  // create other users list to share
  createShareList(name: string){
    console.log('_component_creating sharelist');
    this._Fit.getUserList();
    console.log('3333');
    console.log(this.Me);
  }


  friendRequest(e: MouseEvent, friendName: string){
    console.log('-===in friendRequest===friend name ' + friendName);
    this._Fit.friendRequest(friendName);
    this.clicked = !this.clicked;

  }

  

  requestBox(e: MouseEvent) {
    // var friend = this._Fit.returnFriendName();
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
