import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import {Fit, User } from '../models/exercise';
import { FitService } from '../services/fit.service';
import {map} from 'rxjs/operators';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Me: User;
  private _api = "http://localhost:8080/fit";
  images: string[] = [];


  constructor(private http: Http, private _Fit: FitService, config: NgbCarouselConfig) {
   
    _Fit.getPic().subscribe(data => {
      this.images = data;
    });
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  
    this.Me = _Fit.Me;
  }

  ngOnInit() {
    
  }

  
}
