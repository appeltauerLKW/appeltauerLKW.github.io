import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MindestpreisComponent } from './mindestpreis/mindestpreis.component';
import { AusnahmenComponent } from './ausnahmen/ausnahmen.component';
import { DisqualifikationskriterienComponent } from './disqualifikationskriterien/disqualifikationskriterien.component';
import { EinstellungenComponent } from './einstellungen/einstellungen.component';
import { KundenzuordnungComponent } from './kundenzuordnung/kundenzuordnung.component';

const routes: Routes = [
  { path: '', redirectTo: '/mindestpreis', pathMatch: 'full' },
  { path: 'mindestpreis', component: MindestpreisComponent },
  { path: 'kundenzuordnung', component: KundenzuordnungComponent },
  { path: 'einstellung', component: EinstellungenComponent },
  { path: 'ausnahmen', component: AusnahmenComponent },
  { path: 'disqualifikationskriterien', component: DisqualifikationskriterienComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
