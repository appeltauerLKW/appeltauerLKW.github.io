import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [];

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
      let url = `https://api.sheety.co/45604bc63728735dab6c1b62ccf11028/filterkriterienAnbotsabgabe/mindestpreis/${Id}`;
      let data = this.editedItem;
      let body = {
        mindestpreis: data
          
        
      }

      //print übergenenen string am ende
      let tempElement = document.createElement('div');
      tempElement.innerHTML = JSON.stringify(body);
      document.body.appendChild(tempElement);
      document.body.append("id:");
      document.body.append(this.editedItem.id);


      //TODO: geht nicht weil der ganze body expected wird also ich muss das ganze schicken nicht nur den neuen valie 
      //-> edit button muss für jede row neuen tag haben? und dynamisch mitgeneriert werden sonst werden alle geändert
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body)
      })
      .then((response) => response.json())
      .then(json => {
        // Do something with object
        console.log(json.mindespreis);
      });

      this.editedItem = null;
    }
}
