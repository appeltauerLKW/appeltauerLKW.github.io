import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Injectable, NgZone} from '@angular/core';

@Component({
  selector: 'app-einstellungen',
  templateUrl: './einstellungen.component.html',
  styleUrls: ['./einstellungen.component.css']
})
export class EinstellungenComponent {
  
  data : any[] = [];
  newItem: any;
  addedItem: any;
  filterName: any = "";
  description: any = "";
  blacklist: any = "";
  editedItem: any;
  filter:string = "";
  newOrg: any;

  constructor(public snackBar: MatSnackBar,
    private zone: NgZone) {}

  ngOnInit() {
    let url = 'https://api.sheety.co/d55ee627ceba7b9730be8dacde874d31/filterkriterienAnbotsabgabe/einstellungen?filter[org]=' + this.filter;
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      console.log(json.einstellungen);
      this.data = json.einstellungen;
    });
  }

  onSubmitOrg(form: NgForm) {
      this.filter = this.newOrg;
      this.ngOnInit();
    }

  createItem(item: any) {
    this.addedItem = Object.assign({}, item);
  }


  editItem(item: any) {
    this.editedItem = Object.assign({}, item);
  }

  onSubmitNew(form: NgForm) {
    const data = this.addedItem;
    let url = 'https://api.sheety.co/d55ee627ceba7b9730be8dacde874d31/filterkriterienAnbotsabgabe/einstellungen?filter[org]=' + this.filter;
    let body = {
      einstellungen: {
        "orgEinheit": this.addedItem.orgEinheit,
        "email": this.addedItem.email,
        "orgEhActive": this.addedItem.orgEhActive,
        "hhBisBeladezeitendePreisabgabge": this.addedItem.hhBisBeladezeitendePreisabgabge,
        "hhBisBeladezeitendeGueltigkeit": this.addedItem.hhBisBeladezeitendeGueltigkeit,
        "mindestPreisCheck": this.addedItem.mindestPreisCheck,
        "anzahlLadungenAmTag": this.addedItem.anzahlLadungenAmTag,
        "multiplikator": this.addedItem.multiplikator,
        "zusaetzlicheDisqualifikationskriterienAufOrgUnitLevelKommaGetrennt": this.addedItem.zusaetzlicheDisqualifikationskriterienAufOrgUnitLevelKommaGetrennt,
        "ausnahmenAllgGueltigerFilterkriterienAufDieserOrgUnit": this.addedItem.ausnahmenAllgGueltigerFilterkriterienAufDieserOrgUnit
      }
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then(json => {
    });  
    this.addedItem = false;
  }

  onSubmitEdit(form: NgForm) {
    const Id = this.editedItem.id;
      const data = this.editedItem;
      let url = `https://api.sheety.co/d55ee627ceba7b9730be8dacde874d31/filterkriterienAnbotsabgabe/einstellungen/${Id}`;
      let body = {
        einstellungen: {
          "org": this.editedItem.org,
          "email": this.editedItem.email,
          "orgEhActive": this.editedItem.orgEhActive,
          "hhBisBeladezeitendePreisabgabge": this.editedItem.hhBisBeladezeitendePreisabgabge,
          "hhBisBeladezeitendeGueltigkeit": this.editedItem.hhBisBeladezeitendeGueltigkeit,
          "mindestPreisCheck": this.editedItem.mindestPreisCheck,
          "anzahlLadungenAmTag": this.editedItem.anzahlLadungenAmTag,
          "multiplikator": this.editedItem.multiplikator,
          "zusaetzlicheDisqualifikationskriterienAufOrgUnitLevelKommaGetrennt": this.editedItem.zusaetzlicheDisqualifikationskriterienAufOrgUnitLevelKommaGetrennt,
          "ausnahmenAllgGueltigerFilterkriterienAufDieserOrgUnit": this.editedItem.ausnahmenAllgGueltigerFilterkriterienAufDieserOrgUnit
        }
      }
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then((response) => response.json())
      .then(json => {
        // Do something with object
      });

      this.editedItem = null;
      this.zone.run(() => {
        this.snackBar.open("Änderungen gespeichert, es kann etwas dauern bis sie übernommen werden, sollten aber mit dem nächsten aktualisieren oder Suchen sichtbar werden.", "OK" ,{duration: 4000, panelClass:['snackbar']});
      });
  }
}
