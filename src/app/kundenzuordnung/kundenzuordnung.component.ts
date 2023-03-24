import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kundenzuordnung',
  templateUrl: './kundenzuordnung.component.html',
  styleUrls: ['./kundenzuordnung.component.css']
})
export class KundenzuordnungComponent {

  data : any[] = [];
  newItem: any;
  addedItem: any;
  filterName: any = "";
  description: any = "";
  blacklist: any = "";
  filter:string = "";
  newOrg: any;

  ngOnInit() {
    let url = 'https://api.sheety.co/99e2152a57a16b325a082194762b640d/filterkriterienAnbotsabgabe/kundenzuordnung?filter[org]=' + this.filter;
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      console.log(json.kundenzuordnung);
      this.data = json.kundenzuordnung;
    });
  }
  onSubmitOrg(form: NgForm) {
      this.filter = this.newOrg;
      this.ngOnInit();
    }
  createItem(item: any) {
    this.addedItem = Object.assign({}, item);
  }

  onSubmit(form: NgForm) {
    const data = this.addedItem;
    let url = 'https://api.sheety.co/99e2152a57a16b325a082194762b640d/filterkriterienAnbotsabgabe/kundenzuordnung?filter[org]=' + this.filter;
    let body = {
      kundenzuordnung: {
        "lkwWalterPnr": this.addedItem.lkwWalterPnr,
        "companyTransporeonId": this.addedItem.companyTransporeonId,
        "kundennameVolltext": this.addedItem.kundennameVolltext
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
