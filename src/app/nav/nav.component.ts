import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';
import { User } from '../models/exercise';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private _Fit: FitService) { 
  
  }

  ngOnInit() {
  }


}
