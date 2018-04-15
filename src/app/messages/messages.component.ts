import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    Messages: string[];
  constructor() { 
    this.Messages = ['Complete your Profile before you begin to plan your workout.', 'You can choose your workout plan.'];
  }

  ngOnInit() {
  }



}
