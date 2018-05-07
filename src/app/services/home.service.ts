import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  ImageStackSlide = [];
  ImageCard = [];
  constructor() { 
    this.ImageStackSlide = [
      "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?cs=srgb&dl=active-adult-athlete-416778.jpg&fm=jpg",
      "https://images.pexels.com/photos/864990/pexels-photo-864990.jpeg?cs=srgb&dl=active-adult-aerobic-864990.jpg&fm=jpg",
      "https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?cs=srgb&dl=adventure-athlete-athletic-235922.jpg&fm=jpg"
    ];

    this.ImageCard = [
      "https://images.pexels.com/photos/634030/pexels-photo-634030.jpeg?cs=srgb&dl=active-activity-beach-634030.jpg&fm=jpg",
      "https://images.pexels.com/photos/207917/pexels-photo-207917.jpeg?cs=srgb&dl=action-adult-agility-207917.jpg&fm=jpg",
      "https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?cs=srgb&dl=body-exercise-fitness-176782.jpg&fm=jpg",
      "https://images.pexels.com/photos/28076/pexels-photo.jpg?cs=srgb&dl=beauty-exercise-fitness-28076.jpg&fm=jpg",
      "https://images.pexels.com/photos/348487/pexels-photo-348487.jpeg?cs=srgb&dl=active-adult-athlete-348487.jpg&fm=jpg",
      "https://images.pexels.com/photos/376091/pexels-photo-376091.jpeg?cs=srgb&dl=action-adult-athlete-376091.jpg&fm=jpg",
      "https://images.pexels.com/photos/9806/pexels-photo.jpg?cs=srgb&dl=athlete-crossfit-effort-9806.jpg&fm=jpg"
    ]
  }

}
