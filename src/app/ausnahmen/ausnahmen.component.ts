import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Injectable, NgZone} from '@angular/core';

@Component({
  selector: 'app-ausnahmen',
  templateUrl: './ausnahmen.component.html',
  styleUrls: ['./ausnahmen.component.css']
})
export class AusnahmenComponent {
  
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
    let url = 'https://api.sheety.co/d55ee627ceba7b9730be8dacde874d31/filterkriterienAnbotsabgabe/ausnahmen?filter[org]=' + this.filter;
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      console.log(json.ausnahmen);
      this.data = json.ausnahmen;
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
    let url = 'https://api.sheety.co/d55ee627ceba7b9730be8dacde874d31/filterkriterienAnbotsabgabe/ausnahmen?filter[org]=' + this.filter;
    let body = {
      //ACHTUNG: TYPO IN "ausnahmen" ist gewünscht und wird von sheety so erwartet: "ausnahman"
      ausnahman: {
        "org": this.addedItem.org,
        "pnr": this.addedItem.pnr,
        "vonLand": this.addedItem.vonLand,
        "vonPlz": this.addedItem.vonPlz,
        "nachLand": this.addedItem.nachLand,
        "nachPlz": this.addedItem.nachPlz
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
      // Do something with object
      });  
    this.addedItem = false;
  }

  onSubmitEdit(form: NgForm) {
    const Id = this.editedItem.id;
      const data = this.editedItem;
      let url = `https://api.sheety.co/99e2152a57a16b325a082194762b640d/filterkriterienAnbotsabgabe/ausnahmen/${Id}`;
      let body = {
        //ACHTUNG: TYPO IN "ausnahmen" ist gewünscht und wird von sheety so erwartet: "ausnahman"
        ausnahman: {
          "org": this.editedItem.org,
          "pnr": this.editedItem.pnr,
          "vonLand": this.editedItem.vonLand,
          "vonPlz": this.editedItem.vonPlz,
          "nachLand": this.editedItem.nachLand,
          "nachPlz": this.editedItem.nachPlz
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
