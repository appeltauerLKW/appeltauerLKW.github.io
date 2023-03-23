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


  ngOnInit() {
    let url = 'https://api.sheety.co/99e2152a57a16b325a082194762b640d/filterkriterienAnbotsabgabe/einstellungen';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      console.log(json.einstellungen);
      this.data = json.einstellungen;
    });
  }

  createItem(item: any) {
    this.addedItem = Object.assign({}, item);
  }


  editItem(item: any) {
    this.editedItem = Object.assign({}, item);
  }

  onSubmit(form: NgForm) {
    const data = this.addedItem;
    let url = 'https://api.sheety.co/99e2152a57a16b325a082194762b640d/filterkriterienAnbotsabgabe/einstellungen';
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
}
