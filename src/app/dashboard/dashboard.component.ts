import { Component, OnInit } from '@angular/core';
import { ShortUrlService } from '../services/short-url.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  btnString = 'Shorter';
  normalUrl: string = '';
  shortUrl: string = '';

  constructor(private shorturlService: ShortUrlService) {}

  ngOnInit(): void {}

  short() {
    if (this.btnString === 'Shorter') {
      this.shorturlService.getUrlShort(this.normalUrl).subscribe((data) => {
        this.shortUrl = data.link;
      });
      this.btnString = 'Reset';
    } else {
      this.btnString = 'Shorter';
      this.normalUrl = '';
      this.shortUrl = '';
    }
  }
}
