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

  ngOnInit() {
    let url = 'https://api.sheety.co/d55ee627ceba7b9730be8dacde874d31/filterkriterienAnbotsabgabe/kundenzuordnung';
    fetch(url)
    .then((response) => response.json())
    .then(json => {
      // Do something with the data
      console.log(json.kundenzuordnung);
      this.data = json.kundenzuordnung;
    });
  }

  createItem(item: any) {
    this.addedItem = Object.assign({}, item);
  }

  onSubmit(form: NgForm) {
    const data = this.addedItem;
    let url = 'https://api.sheety.co/d55ee627ceba7b9730be8dacde874d31/filterkriterienAnbotsabgabe/kundenzuordnung';
    let body = {
      kundenzuordnung: {
        "lkwWalterPnr": this.addedItem.lkwWalterPnr,
        "companyTransporeonId": this.addedItem.companyTransporeonId,
        "kundennameVolltext": this.addedItem.kundennameVolltext
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
}
