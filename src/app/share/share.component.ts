import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { FitService } from '../services/fit.service';
import {Fit, User, People } from '../models/exercise';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})

export class ShareComponent implements OnInit {
  
  public model: any;
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
    // refresh Me object - receive Notice, FriendList, Requested status to update
    if(this.Me){

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
        // if a user send a friend request, remove that friend from the user list.
        if((this.Me.EachShare.indexOf(this.Me.EachShare.find(x=> x.RequestSent == true)))!= -1){
          this.Me.EachShare.splice(this.Me.EachShare.indexOf(this.Me.EachShare.find(x=> x.RequestSent == true)), 1);
        }
      });
    }
  }

  // Send a friend request via friend's name
  friendRequest(e: MouseEvent, friendName: string){
    var sendRequest = true;
    this._Fit.changeSentRequest(friendName, sendRequest);
    this._Fit.friendRequest(friendName);
  }

  // Accept or Decline Friend's request. 
  requestBox(e: MouseEvent, friendName: string) {
    var friend = this.Me.Notice.find(x=>x.Friend == friendName);
    // accept request
    if (confirm(friend.Msg + '\nHit Ok to Accept or Cancel to Decline.')) {
        this._Fit.addFriendList(friendName);
        
    } else {
      // dismiss request
       var decline = false;
       this._Fit.changeSentRequest(friendName, decline);
        return;
    }
    // change the request state of Me
    this._Fit.changeRequested(this.Me.Name);
  }

  // update friend's history if hits Display button
  friendHistory(e: MouseEvent, friend: string){
    this._Fit.addFriendHistory(friend);
  }

  // display friend's history if date is selected
  displayHistory(e: MouseEvent, key: string, friend: string){
    this._Fit.getFriendSummary(key, friend);
  }

  // Type ahead implementation (In-class Final) 
/*     search(text$){
      console.log(text$);
      this._Fit.search(text$)
      .debounceTime(200)
      .distinctUntilChanged()
      .subscribe(
        data => this.model = data
      );
    } */
  }
  
