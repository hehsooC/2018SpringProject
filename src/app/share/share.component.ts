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

  constructor(private _Fit: FitService, private _Router: Router) { 
    this.Me = _Fit.Me;

    // if there user is not logged in or not signed up, direct user to login.
    if(!_Fit.Me){
      _Router.navigate(['/login']);
    } 
    setInterval(()=> this.refreshList(), 1000)

  }

  ngOnInit() {

    }
    
  

  refreshList(){


    this._Fit.refreshMe().subscribe(data => {
      this.Me.Notice = data.Notice;
      this.Me.FriendList = data.FriendList;
      this.Me.Requested = data.Requested;

    

    });

    // create other users list to share and refresh to update
    this._Fit.getUserList().subscribe(data => {
      this.Me.EachShare = data;
      // remove myself from the share list
      this.Me.EachShare.splice(this.Me.EachShare.indexOf(this.Me.EachShare.find(x=> x.Name == this.Me.Name)), 1);
    });

  }

  friendRequest(e: MouseEvent, friendName: string){
    this._Fit.friendRequest(friendName);
    if(this.Me.EachShare.find(x=> x.Name == friendName)){
      this.Me.EachShare.splice(this.Me.EachShare.findIndex(x => x.Name == friendName), 1);

    }

  }

  // multiple Request?

  requestBox(e: MouseEvent, friendName: string) {
    var friend = this.Me.Notice.find(x=>x.Friend == friendName);
    console.log('friend name** ' + friendName);
    if (confirm(friend.Msg + '\nHit Ok to Accept or Cancel to Decline.')) {
        this._Fit.addFriendList(friendName);
        
    } else {
        // dismiss request
        return;
    }
    /////
    // this.Me.Notice.unshift();
    /////
    this._Fit.changeRequested(this.Me.Name);

  }

  friendHistory(e: MouseEvent, friend: string){
    this._Fit.addFriendHistory(friend);
  }

  displayHistory(e: MouseEvent, key: string, friend: string){

    this._Fit.getFriendSummary(key, friend);
  }

}
