import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MindestpreisComponent } from './mindestpreis/mindestpreis.component';
import { DisqualifikationskriterienComponent } from './disqualifikationskriterien/disqualifikationskriterien.component';
import { KundenzuordnungComponent } from './kundenzuordnung/kundenzuordnung.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';
import { AusnahmenComponent } from './ausnahmen/ausnahmen.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from  
    '@angular/platform-browser/animations'; 
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [
    AppComponent,
    MindestpreisComponent,
    AusnahmenComponent,
    DisqualifikationskriterienComponent,
    EinstellungenComponent,
    KundenzuordnungComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }