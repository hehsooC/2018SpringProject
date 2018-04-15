import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

import { Fit } from "../models/exercise";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Model = new Fit();
  //private _api = "http://localhost:8080/home"


  name: string;
  age: number;
  weight: number;
  height: number;
  goalWeight: number;


  constructor() {
  }

  ngOnInit() {


  }

  
}
