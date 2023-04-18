import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
        "multiplikator": this.addedItem.multiplikator
      }
    }

      //print übergenenen string am ende
      let tempElement = document.createElement('div');
      tempElement.innerHTML = JSON.stringify(body);
      document.body.appendChild(tempElement);


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
      console.log(json.disqualifikationskriterien);
      let responseElement = document.createElement('div');
      responseElement.innerHTML = JSON.stringify(json);

      // Append the new element to the document body
      document.body.appendChild(responseElement); //IMPORTANT --- SHOWS ACTUAL RESPONSE CODE!!! DONT DELETE
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
          "multiplikator": this.editedItem.multiplikator
        }
      }

      //print übergenenen string am ende
      let tempElement = document.createElement('div');
      tempElement.innerHTML = JSON.stringify(body);
      document.body.appendChild(tempElement);
      document.body.append("id:");
      document.body.append(this.editedItem.id);
      

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
        document.body.append(JSON.stringify(json));
      });

      this.editedItem = null;
  }
}
