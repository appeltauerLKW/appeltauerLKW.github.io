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

@NgModule({
  declarations: [
    AppComponent,
    MindestpreisComponent,
    DisqualifikationskriterienComponent,
    KundenzuordnungComponent,
    EinstellungenComponent,
    AusnahmenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
