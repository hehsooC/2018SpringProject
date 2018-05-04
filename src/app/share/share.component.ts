import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { FitService } from '../services/fit.service';
import {Fit, User } from '../models/exercise';
import { Router } from '@angular/router';
@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  
  Me: User;
  People: User;

  constructor(private _Fit: FitService, private _Router: Router) { 
    this.Me = _Fit.Me;
    
    if(!this.Me){
      _Router.navigate(['/login']);
    } 
    this.createShareList()
  }

  ngOnInit() {
  }


  createShareList(){
    console.log('_component_creating sharelist');
    this._Fit.getUserList();
  }

}
