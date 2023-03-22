import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  /*
  data: any[] = [];

  //--------------------------------------------MINDESTPREIS------------------------------------------------------------------------------
  
  ngOnInit() {
    let url = 'https://api.sheety.co/45604bc63728735dab6c1b62ccf11028/filterkriterienAnbotsabgabe/mindestpreis';
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

    onSubmit(form: NgForm) {
      const Id = this.editedItem.id;
      const data = this.editedItem;
      let url = `https://api.sheety.co/45604bc63728735dab6c1b62ccf11028/filterkriterienAnbotsabgabe/mindestpreis/${Id}`;
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
    */

}
