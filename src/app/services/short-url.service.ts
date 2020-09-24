import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ShortUrlService {
  urlBitly = 'https://api-ssl.bitly.com/v4/bitlinks';
  token = '81c5bc644ff2c3c008f4ea79456cc9d34e7cc806';
  

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
