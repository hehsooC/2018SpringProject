import { Component, OnInit } from '@angular/core';
import { FitService } from '../services/fit.service';
import { Fit } from '../models/exercise';
import { MessagesService } from '../services/messages.service';

declare var googleyolo: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Model = new Fit();
  constructor(private _Fit: FitService, private _Messages: MessagesService) { }

  ngOnInit() {
  }

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
