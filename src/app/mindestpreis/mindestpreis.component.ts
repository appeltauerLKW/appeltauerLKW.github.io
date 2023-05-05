import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Injectable, NgZone} from '@angular/core';

@Component({
  selector: 'app-mindestpreis',
  templateUrl: './mindestpreis.component.html',
  styleUrls: ['./mindestpreis.component.css']
})
export class MindestpreisComponent {
  data: any[] = [];
  filter:string = "";
  newOrg: any;

  constructor(public snackBar: MatSnackBar,
    private zone: NgZone) {}
  
  onSubmitOrg(form: NgForm) {
      this.filter = this.newOrg;
      this.ngOnInit();
    }
  ngOnInit() {
    let url = 'https://api.sheety.co/d55ee627ceba7b9730be8dacde874d31/filterkriterienAnbotsabgabe/mindestpreis?filter[org]=' + this.filter;
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      console.log(json.mindestpreis);
      this.data = json.mindestpreis;
    });
  }

  editedItem: any;

    editItem(item: any) {
      this.editedItem = Object.assign({}, item);
    }
    onSubmitEdit(form: NgForm) {
      const Id = this.editedItem.id;
      const data = this.editedItem;
      let url = `https://api.sheety.co/d55ee627ceba7b9730be8dacde874d31/filterkriterienAnbotsabgabe/mindestpreis/${Id}`;
      let body = {
        //ACHTUNG DER TYPO IST BEACHBSICHTIGT!! SHEETY ERWARTET "mindestprei" OHNE "s"
        mindestprei: data
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
      //alert("Änderungen wurden gespeichtert, bitte erneut auf Suchen klicken, um die Ansicht zu aktualisieren (kann manchmal ein wenig dauern)")
      this.zone.run(() => {
        this.snackBar.open("Änderungen gespeichert, es kann etwas dauern bis sie übernommen werden, sollten aber mit dem nächsten aktualisieren oder Suchen sichtbar werden.", "OK" ,{duration: 8000, panelClass:['snackbar']});
      });
      
    }
}
