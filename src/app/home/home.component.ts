import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import {Fit, User, Exercise, Info } from '../models/exercise';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Model = new Fit();

  private _api = "http://localhost:8080/fit";

  constructor(private http: Http) {
    setInterval(()=> this.refresh(), 1000)
  }

  
  ngOnInit() {
  }

  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  }
  /** Need to find health info database api
   getHealthInfo(e: MouseEvent){
     this.http.post(this._api + "/exercise/info", {})
     .subscribe();
   }
*/
}
