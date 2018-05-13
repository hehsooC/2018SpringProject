import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Fit, User, Info, Exercise, People, Friend } from '../models/exercise';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class FitService {

  private _api = "http://localhost:8080/fit";

  ExerciseStack =  [];

  Me: User;
  Model: Fit;
  TotalTime: number;
  

  constructor(private http: Http, 
              private _Router: Router,
              ) { 
                this.ExerciseStack =  [
                  "Squat",
                  "Plank", 
                   "Running",
                   "Jump Rope",
                   "Swimming",
                   "Walk",
                   "Aerobic Dance",
                   "Zumba",
                   "Yoga",
                   "Centergy",
                   "Stretching",
                   "Gentle Yoga",
                   "Push Up"
                   ];
    
                

  }


  
  // initialize user's data when they sign-up.
  signUp(name: string, password: string){
    this.Me = {Name: name, Password: password, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null }, 
    PlanExercise: [], DoneExerciseList: [], Record: [], TotalSetTime: 0, EachShare: [], Notice: [], Requested: false, FriendList: [], History: [],
    Month: null, Date: null, Summary: {Name: name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: 0, Month: 0, Date: 0, KeyDate: null}, FriendSummary:{Name: name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: 0, Month: 0, Date: 0, KeyDate: null}};
    this.http.get(this._api + "/sign-up", { params : { name: name, password: password } })
    .subscribe(data=> {
      if(!data.json()){
        // alert user name taken
        alert("User Name is taken, please try different name");
        return;
      }
      this._Router.navigate(['/profile']);
    })
  }

  // get user's information from the server.
  login(name: string, password: string){
    this.http.get(this._api + "/exercise/login", { params : { name: name, password: password } })
    .subscribe(data=> {
      var check = data.json()
      // if there is no username or password matching in the server, alert.
      if(!check){
        alert('Username or Password doesn\'t match in our system! ');
        return;
      }
      // if there is a user, set Me to received data.
      this.Me = data.json()
      this._Router.navigate(['/fit']);
    })
  }


  // add user's profile to server
  profileAdd(age: number, weight: number, height: number, goalWeight: number, bmi: number, goalBmi: number, name: string){
    this.http.post(this._api + "/exercise/profile", { Age: age, Weight: weight, Height: height, 
                                                              GoalWeight: goalWeight, BMI: bmi, 
                                                              GoalBMI: goalBmi, name: name})
    .subscribe(data => {
        this.Me.Profile = data.json();
    });
    this._Router.navigate(['/fit']);
    
  }

  // set the month and the date of user's log in the server.
  SetDay(name: string, key: string, month: string, date: number){
        this.http.post(this._api + '/exercise/setDay', {name: name, key: key, month: month, date: date})
        .subscribe(data=>{
          if(!data.json()){
            return;
          }
         this.Me.History = data.json();
         
        });
  }
  


  // post planned workout list to the History[] in server
  planHistory(text: string, key: string){
    this.http.post(this._api + "/exercise/planHistory", {name: this.Me.Name, Text: text, key: key})
              .subscribe(data => {
                if(!data.json()){
                  return;
                }
                this.Me.PlanExercise = data.json();
              });

  }
  

  // set the selected workout list to the server and make Chosen to true
    makeChosen(text: string, key: string){
      this.http.post(this._api + "/exercise/chosen", {name: this.Me.Name, text: text, key: key})
      .subscribe(data => {
        this.Me.PlanExercise = data.json();
      })
    }

    

    // post selected workout to the server
    doneExercise(text: string, time: number, set: number, totalTime: number){
      this.http.post(this._api + '/exercise/done', {name: this.Me.Name, text: text, time: time, set: set, total: totalTime })
                .subscribe(data => {
                  if(!data.json()){
                    return;
                  }
                  this.Me.DoneExerciseList = data.json();
                });
    }


    // post total workout time to the server
    getTotalTime(name: String, key: string, totalTime: number){
      this.http.post(this._api + "/exercise/totaltime",{name: name, key: key, totalTime: totalTime})
      .subscribe(data => {
        this.Me.TotalSetTime = Number(data.json());
      })
    }

    // Update the Done Exercise List in History[] in the server.
    RecordDay(text: string, key: string, time: number, set: number, totalTime: number){
        this.http.post(this._api + '/exercise/recordDay', {name: this.Me.Name, key: key, text: text, time: time, set: set, total: totalTime })
        .subscribe(data => {
          if(!data.json()){
            return;
          }
          this.Me.DoneExerciseList = data.json();
        }

        );
  
      }
    // get the list of other users from the server
    getUserList(){
      return this.http.get(this._api + '/exercise/people', { params: {name: this.Me.Name}})
            .map((response:Response)=>response.json());
    }

    // get the updated information from the server to refresh Share Component.
    getRequestState(){
      return this.http.get(this._api + '/exercise/request/state', {params: {name: this.Me.Name}})
            .map((response:Response)=>response.json());

    }


    // Send a request notice to a selected user.
    friendRequest(friendName: string){
      this.http.post(this._api + '/exercise/request', {friend: friendName, name: this.Me.Name})
      .subscribe(data => {
        if(!data.json()){
          return;
        }
      });
    }

    // indicate if a user send a friend request to another user to remove that user from User's list
    changeSentRequest(friendName: string ){
      console.log('Change Sent Request ');
      this.http.post(this._api + '/exercise/sentRequestChange', {friend: friendName, name: this.Me.Name})
      .subscribe(data => {
        console.log('change request works?');
        if(!data.json()){
          return;
        }
      });
    }

    // Add friends to this user's FriendList in the server when user accepts the request.
    addFriendList(friendName:string){
      this.http.post(this._api+'/exercise/addFriend',{name: this.Me.Name, friend: friendName})
      .subscribe(data => {
        this.Me.FriendList = data.json();
      });
      
    }

    
    // add Friend's Workout Summary to Record
    addFriendHistory(friend: string){
      this.http.post(this._api+'/exercise/addFriendHistory',{name: this.Me.Name, friend: friend})
      .subscribe(data => {
        if(!data.json()){
          return;
        }
        var history = data.json();
        this.Me.Record = history;
      });
    }

    // if user gets friend request, change the Requested status to inform the user that they have friend requests.
    changeRequested(name: string){
      this.http.post(this._api + '/exercise/changeRequest', {name: name})
      .subscribe(data =>{
        this.Me.Requested = data.json();
      });
    }

    // get summary from the server to display it at History
    getSummary(key: string){
      this.http.get(this._api + "/exercise/summary", { params : { user: this.Me.Name, key: key } })
      .subscribe(data=> {
        this.Me.Summary = data.json();

    });
  }

  getHistory(key: string){
    this.http.get(this._api + "/exercise/getHistory", { params : { user: this.Me.Name, key: key } })
    .subscribe(data=> {
      var history = data.json();

      this.Me.PlanExercise = history.PlanExercise;
      this.Me.DoneExerciseList = history.DoneExerciseList;
      this.Me.Month = history.Month;
      this.Me.Date = history.Date;

    });
  }

  getFriendSummary(key: string, friend: string){
    this.http.get(this._api + "/exercise/friendSummary", { params : { name: this.Me.Name, key: key , friend: friend} })
    .subscribe(data=> {
      this.Me.FriendSummary = data.json();
      console.log('friend summary is =====');
      console.log(this.Me.FriendSummary);

    });
  }

  // refresh Me Object to update in Share component.
  refreshMe(){
    return this.http.get(this._api + "/exercise/refreshMe", { params : { name: this.Me.Name }})
    .map((response:Response)=>response.json()); 
  }
    

}
  

