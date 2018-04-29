import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  Messages = [];
  constructor() { 
    this.Messages = ['Complete your Profile before you begin to plan your workout.', 'You can choose your workout plan.'];
  
 }

}
