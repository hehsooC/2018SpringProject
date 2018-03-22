import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { BmiComponent } from './bmi/bmi.component';
import { TipsComponent } from './tips/tips.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MessagesComponent,
    ExerciseComponent,
    BmiComponent,
    TipsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'exercise', component: ExerciseComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: 'bmi', component: BmiComponent},
      {path: 'tips', component: TipsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
