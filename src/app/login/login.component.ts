import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';
import { Fit } from '../models/exercise';

declare var googleyolo: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Fit: FitService) { }

  ngOnInit() {
  }

  // pass name and password to Service for a user to sign-in
  login(name:string, password: string){
    this._Fit.login(name, password);
  }

  /* googleLogin(){
    googleyolo.hint({
      supportedAuthMethods: [
        "https://accounts.google.com",
       // "googleyolo://id-and-password"
      ],
      supportedIdTokenProviders: [
        {
          uri: "https://accounts.google.com",
          clientId: "224672501632-b59a192aifnt8s107nllt1kdognsjejv.apps.googleusercontent.com"
        }
      ]
    }).then((credentials: any) => {
      this._Fit.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
      console.log(credentials);
    })
  } */

}
