import { TestBed, async } from '@angular/core/testing';
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
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HistoryComponent } from './history/history.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        MessagesComponent,
        HomeComponent,
        FitComponent,
        ShareComponent,
        LoginComponent,
        SignUpComponent,
        ProfileComponent,
        EditProfileComponent,
        HistoryComponent
      ],
      imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: 'home', component: HomeComponent },
            { path: 'fit', component: FitComponent },
            { path: 'share', component: ShareComponent },
            { path: 'login', component: LoginComponent },
            { path: 'sign-up', component: SignUpComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'editProfile', component: EditProfileComponent },
            { path: 'history', component: HistoryComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full'}
    
        ])
      ],
  
    providers: [MessagesService, FitService, {provide: APP_BASE_HREF, useValue: '/src/app'}],
    
      
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
 