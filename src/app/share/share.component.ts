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
 /*    if(!_Fit.Me.Notice){
      console.log('nothing in Notice yet ');
      this.Me.Notice = [];

    } */

  }

  ngOnInit() {

    }
    
  

  refreshList(){


    this._Fit.refreshMe().subscribe(data => {
      this.Me.Notice = data.Notice;
      this.Me.FriendList = data.FriendList;
      this.Me.Requested = data.Requested;

    

    });
    /* if(this.Me.Notice){
      // refresh user's data 
    this._Fit.getRequestState().subscribe(data => {
      this.Me.Requested = data;
    });
    } */
    

    // create other users list to share and refresh to update
    this._Fit.getUserList().subscribe(data => {
      this.Me.EachShare = data;
      // remove myself from the share list
      this.Me.EachShare.splice(this.Me.EachShare.indexOf(this.Me.EachShare.find(x=> x.Name == this.Me.Name)), 1);
      //console.log(this.Me.EachShare);
    });

    /* this._Fit.refreshNotice().subscribe(data => {
      this.Me.Notice = data;
    })

    this._Fit.refreshFriendList().subscribe(data =>{
      this.Me.FriendList = data;
    }) */
/*     this._Fit.getOthers().subscribe(data => {
      this.Me.Notice = data;
    }) */
  }

  friendRequest(e: MouseEvent, friendName: string){
    this._Fit.friendRequest(friendName);
    if(this.Me.EachShare.find(x=> x.Name == friendName)){
      this.Me.EachShare.splice(this.Me.EachShare.findIndex(x => x.Name == friendName), 1);

    }
    /* console.log('friendName is ' + friendName);
    console.log('###EachShare');
    console.log(this.Me.EachShare); */
    // this.Me.EachShare.find(x=> x.Name == friendName).FriendRequest = true;

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
    console.log('friend Name : ' + friend + '00000000');

    console.log('add friend\'s history');
    this._Fit.addFriendHistory(friend);
/*     var friendHistory = this.Me.Record.find(x=> x.Name == friend);
    if(friendHistory){
      console.log('friend history is here');
      return;
    }
    else{
      
    } */

  }

  displayHistory(e: MouseEvent, key: string, friend: string){

    console.log('display history');
    this._Fit.getFriendSummary(key, friend);
    /* 
    var friendFound = this.Me.Record.find( x => x.Name == name);
   
    if(friendFound){
      var summary = this.Me.Record.find(x=>x.KeyDate == key);
      this.Me.FriendSummary.DoneExerciseList = summary.DoneExerciseList;
      this.Me.FriendSummary.TotalSetTime = summary.TotalSetTime;


      // this._Fit.addFriendHistory(friendName);
      // console.log('you have a record');
      // console.log('Summary ----');
      // this._Fit.getFriendSummary(key);
      // console.log(this.Me.Summary);
      // this.Me.Summary.DoneExerciseList = summary.DoneExerciseList;
      // this.Me.Summary.TotalSetTime = summary.TotalSetTime;
    }
    else{
      return;
    } */

  }

}
