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
  interval: any;
  

  constructor(private _Fit: FitService, private _Router: Router) { 
    this.Me = _Fit.Me;
    
    // if there user is not logged in or not signed up, direct user to login.
    if(!this.Me){
      _Router.navigate(['/login']);
    } 
    setInterval(()=> this.refreshList(), 1000)


  }

  ngOnInit() {

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
      //console.log(this.Me.EachShare);

      
    });
  }


  friendRequest(e: MouseEvent, friendName: string){
    this._Fit.friendRequest(friendName);
    /* console.log('friendName is ' + friendName);
    console.log('###EachShare');
    console.log(this.Me.EachShare); */
    // this.Me.EachShare.find(x=> x.Name == friendName).FriendRequest = true;

  }

  

  requestBox(e: MouseEvent) {
    var friend = this.Me.Notice[0].Friend;
    console.log('friend name** ' + friend);
    if (confirm(this.Me.Notice.find(x=>x.Name == this.Me.Name).Msg + '\n Hit Ok to Accept or Cancel to Decline.')) {
        this._Fit.addFriendList(friend);
    } else {
        // dismiss request
    }
    this.Me.Notice.unshift();
    this._Fit.changeRequested(this.Me.Name);

}

}
