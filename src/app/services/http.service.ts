import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string, options?: any): Observable<any> {
    return this.http
      .get(this.buildUrl(url), this.optionsRequest(options))
  }

  post(url: string, body: any, options?: any): Observable<any> {
    return this.http
      .post(this.buildUrl(url), body, this.optionsRequest(options))
  }

  put(url: string, body: any, options?: any): Observable<any> {
    return this.http
      .put(this.buildUrl(url), body, this.optionsRequest(options))
  }

  delete(url: string, options?: any): Observable<any> {
    return this.http
      .delete(this.buildUrl(url), this.optionsRequest(options))
  }


  private optionsRequest(options) {
    return options ? options : {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  }

  private buildUrl(url: string) {
    return url.startsWith('http') ? url : environment.apiPath + url
  }


}
