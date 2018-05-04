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
  Share: People[];

  constructor(private _Fit: FitService, private _Router: Router) { 
    this.Me = _Fit.Me;
    this.Share = _Fit.Share;
    
    if(!this.Me){
      _Router.navigate(['/login']);
    } 
    if(this.Me)
      this.createShareList(this.Me.Name)

  }

  ngOnInit() {
  }


  createShareList(name: string){
    console.log('_component_creating sharelist');
    this._Fit.getUserList(name);
  }


  shareWorkout(name: string){
    this._Fit.shareLog(name);
  }
 // IsUserMe = () => this.Share.find(x=>x.Name == this.Me.Name);

}
