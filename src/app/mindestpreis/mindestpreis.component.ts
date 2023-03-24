import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mindestpreis',
  templateUrl: './mindestpreis.component.html',
  styleUrls: ['./mindestpreis.component.css']
})
export class MindestpreisComponent {
  data: any[] = [];
  filter:string = "";
  newOrg: any;
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
