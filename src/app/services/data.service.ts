import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://api.sheety.co/45604bc63728735dab6c1b62ccf11028/filterkriterienAnbotsabgabe/orgEhImScope%20%28infoOnly%29';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
