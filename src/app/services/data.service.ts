import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://api.sheety.co/45604bc63728735dab6c1b62ccf11028/filterkriterienAnbotsabgabe/orgEhImScope%20%28infoOnly%29';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }

  
  //--------------------------------------------MINDESTPREIS------------------------------------------------------------------------------
  
  data: any[] = [];
  editedItem: any;


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


}
