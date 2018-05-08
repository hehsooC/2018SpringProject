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
 //   setInterval(()=> this.refresh(), 1000)
    
                

  }

 /*  refresh(){
    this.http.get(this._api + "/state")
        .subscribe(data=> this.Model = data.json())
  } */

  
  signUp(name: string, password: string){
    this.Me = {Name: name, Password: password, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null }, 
    PlanExercise: [], DoneExerciseList: [], Record: [], TotalSetTime: 0, EachShare: [], Notice: [], Requested: false, FriendList: [], History: [],
    Month: null, Date: null};
    this.http.get(this._api + "/exercise", { params : { name: name, password: password } })
    .subscribe(data=> {
      if(!data.json()){
              // alert user name taken
        alert("User Name is taken, please try different name");
        return;
      }
      //this.getUserList();
      this._Router.navigate(['/profile']);
    })
     
      
    }


    /* oAuthLogin(name: string, token: string, pic: string){
      // this.Me = { Name: name };
      // this.pic = pic;
      // this.token = token; 
      this.Me = {Name: name, Password: null, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null }, 
      PlanExercise: [], DoneExerciseList: [], Record: [], TotalSetTime: 0};
      this._Router.navigate(['/fit']);
    } */
  
    
  login(name: string, password: string){
    this.http.get(this._api + "/exercise/login", { params : { name: name, password: password } })
    .subscribe(data=> {
      var check = data.json()
      if(!check){
        alert('Username or Password doesn\'t match in our system! - service ');
        return;
      }
      this.Me = data.json()
      this._Router.navigate(['/fit']);

    
    })
   
  }


  profileAdd(age: number, weight: number, height: number, goalWeight: number, bmi: number, goalBmi: number, name: string){
    this.http.post(this._api + "/exercise/profile", { Age: age, Weight: weight, Height: height, 
                                                              GoalWeight: goalWeight, BMI: bmi, 
                                                              GoalBMI: goalBmi, name: name})
    .subscribe(data => {
        this.Me.Profile = data.json();
    });
    this._Router.navigate(['/fit']);
    
  }

  // post planned workout list to the server
  chooseExercise(text: string){
    this.http.post(this._api + "/exercise/choose", {name: this.Me.Name, Text: text})
              .subscribe(data => {
                if(!data.json()){
                  return;
                }
                this.Me.PlanExercise = data.json();
              });

  }
  

  // set the selected workout list to the server and make Chosen to true
    makeChosen(text: string){
      this.http.post(this._api + "/exercise/chosen", {name: this.Me.Name, text: text})
      .subscribe(data => {
        this.Me.PlanExercise = data.json();
      })
    }


    // post selected workout to the server
    selectExercise(done){

      this.http.post(this._api + '/exercise/done', {name: this.Me.Name, list: done })
                .subscribe(data => {
                  if(!data.json()){
                    console.log('done data is false - service');
                    return;
                  }
                });
    }


    // post total workout time to the server
    getTotalTime(total){
      this.http.post(this._api + "/exercise/totaltime",{name: this.Me.Name, totalSet: total})
      .subscribe(data => {
        this.Me.TotalSetTime = Number(data.json());
      })
    }

    // get the list of other users from the server
    getUserList(){
      return this.http.get(this._api + '/exercise/people', { params: {name: this.Me.Name}})
            .map((response:Response)=>response.json());
    }

    getRequestState(){
      return this.http.get(this._api + '/exercise/request/state', {params: {name: this.Me.Name}})
            .map((response:Response)=>response.json());

    }
    // Send a request notice to a selected user
    friendRequest(friendName: string){

      this.http.post(this._api + '/exercise/request', {friend: friendName, name: this.Me.Name})
      .subscribe();
      

    }

    addFriendList(friendName:string){
      
      this.http.post(this._api+'/exercise/addFriend',{name: this.Me.Name, friend: friendName})
      .subscribe(data => {
        this.Me.FriendList = data.json();
        console.log('FriendList ---');
        console.log(this.Me.FriendList);
      });
      
    }

    changeRequested(name: string){
      this.http.post(this._api + '/exercise/changeRequest', {name: name})
      .subscribe();

      
    }
    // set the month and the date of user's log in the server.
    SetDay(month: number, date: number){
      console.log('month: ' + month);
      console.log('date ' + date);
      var key = month +'/'+date;
      this.http.post(this._api + '/exercise/setDay', {month: month, date: date, name: this.Me.Name, key: key.toString()})
      .subscribe();


    }

    RecordDay(month: any, date: number){
      var key = month +'/'+date;
      this.http.post(this._api + '/exercise/recordDay', {name: this.Me.Name, month: month, date: date, key: key.toString() })
      .subscribe();


    }


  /*   getDay(){
      return this.http.get(this._api+'/exercise/getDay', {params:{name: this.Me.Name}})
      .map((response:Response)=>response.json());
      
    }
    getMonth(){
      return this.http.get(this._api+'/exercise/getMonth', {params:{name: this.Me.Name}})
      .map((response:Response)=>response.json());
      
    }

    putHistory(done){
      this.http.post(this._api + '/exercise/recordWorkout', {name: this.Me.Name, done: done})
      .subscribe();
    }
 */
    getUserStatus(){
      return this.http.get(this._api+'/exercise/user', {params:{name: this.Me.Name}})
      .map((response:Response)=>response.json());

    }
  

}
  

