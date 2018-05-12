import { Component, OnInit } from '@angular/core';
import { User } from '../models/exercise';
import { FitService } from '../services/fit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  Me: User;

  constructor(private _Fit: FitService, private _Router: Router) {
    this.Me = _Fit.Me;
    if(!this.Me){
      _Router.navigate(['/login']);
    } 

    
  
   }


  ngOnInit() {
  }

  // find workout summary via key.
  submitLog(e: MouseEvent, key: string){
    if(this.Me.History.find(x => x.KeyDate == key)){
      console.log('history found');
      this._Fit.getSummary(key);

    }
    else{
      console.log('no history found');
    }

  }

}
