import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { FitComponent } from './fit/fit.component';
import { MessagesService } from './services/messages.service';
import { FitService } from './services/fit.service';
import { ShareComponent } from './share/share.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MessagesComponent,
    HomeComponent,
    FitComponent,
    ShareComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'home', component: HomeComponent },
        { path: 'fit', component: FitComponent },
        { path: 'share', component: ShareComponent },
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignUpComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full'}

    ])
  ],
  providers: [MessagesService, FitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
