import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpService) { }

  all() {
    return this.http.get('/clients');
  }

  show(id) {
    return this.http.get('/clients/' + id);
  }

  create(data) {
    return this.http.post('/clients', data);
  }

  update(id, data) {
    return this.http.put('/clients/' + id, data);
  }

  remove(id) {
    return this.http.delete('/clients/' + id);
  }

}
