import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  urlBitly = environment.urlBitly
  token = environment.token


  constructor(private http: HttpClient) { }

  getUrlShort(url): Observable<any> {
    const token = this.getToken();
    const body  = {
      long_url: url
    };
    return this.http.post(this.urlBitly, body, { headers: token});
  }

  getToken() {
    const tokenHeader1 = new HttpHeaders({Authorization: 'Bearer ' + this.token});
    return tokenHeader1;
  }
}
