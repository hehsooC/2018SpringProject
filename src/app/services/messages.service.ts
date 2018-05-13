import { Injectable } from '@angular/core';
import { FitService } from './fit.service';

@Injectable()
export class MessagesService {

  Messages = [];
  constructor(private _Fit: FitService) { 
    this.Messages = ['Welcome to Fitness Tracker! You can record your workout plan.'];
 }



}
