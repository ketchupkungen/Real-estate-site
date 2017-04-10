import { Component } 		from '@angular/core';
import { Http } 			  from '@angular/http';

@Component({
  selector: 'company-card',
  templateUrl: 'templates/company-card.html',
  styleUrls: ['css/company-card.component.css']
})

export class CompanyCardComponent {

  usObject:any;

  constructor(private http:Http) {
    this.http.get('data/us.json')
      .subscribe(res => this.usObject = res.json().name);
  }
}
