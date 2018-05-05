import { Injectable } from '@angular/core';
import { FitService } from './fit.service';

@Injectable()
export class MessagesService {

  Messages = [];
  constructor(private _Fit: FitService) { 
    this.Messages = ['Complete your Profile before you begin to plan your workout.', 'You can choose your workout plan.'];
 }



}
