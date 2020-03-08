import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  constructor(private http: HttpService) { }

  all() {
    return this.http.get('/travels');
  }

  userTravels(email) {
    return this.http.get('/travels/' + email);
  }

  save(xmlData) {
    return this.http.post('/travels', xmlData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/xml',
      })
    })
  }
}
