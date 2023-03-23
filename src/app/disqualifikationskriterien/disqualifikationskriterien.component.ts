import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-disqualifikationskriterien',
  templateUrl: './disqualifikationskriterien.component.html',
  styleUrls: ['./disqualifikationskriterien.component.css']
})
export class DisqualifikationskriterienComponent {

  data : any[] = [];
  newItem: any;
  addedItem: any;
  filterName: any = "";
  description: any = "";
  blacklist: any = "";

  ngOnInit() {
    let url = 'https://api.sheety.co/99e2152a57a16b325a082194762b640d/filterkriterienAnbotsabgabe/disqualifikationskriterien';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      console.log(json.disqualifikationskriterien);
      this.data = json.disqualifikationskriterien;
    });
  }

  createItem(item: any) {
    this.addedItem = Object.assign({}, item);
  }

  onSubmit(form: NgForm) {
    let url = 'https://api.sheety.co/99e2152a57a16b325a082194762b640d/filterkriterienAnbotsabgabe/disqualifikationskriterien';
  
    if(this.addedItem.filterkriteriumName == null) this.addedItem.filterkriteriumName = this.filterName;
    if(this.addedItem.beschreibung == null) this.addedItem.beschreibung = this.description;
    if(this.addedItem.blacklist == null) this.addedItem.blacklist = this.blacklist;

    let body = {
      disqualifikationskriterien: {
        "filterkriteriumName": this.addedItem.filterkriteriumName,
        "beschreibung": this.addedItem.beschreibung,
        "blacklist": this.addedItem.blacklist
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
  }
}
