import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
