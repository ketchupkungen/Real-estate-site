import { Component } 		from '@angular/core';
import { Http } 			  from '@angular/http';

@Component({
  selector: 'company-card',
  templateUrl: 'templates/company-card.html',
  styleUrls: ['css/company-card.component.css']
})

export class CompanyCardComponent {

  companyName:any;
  companyPhone:any;
  companyMailHq:any;
  companyMailSupport:any;

  companyCity:any;
  companyAddress:any;
  companyPostcode:any;

  constructor(private http:Http) {
    this.http.get('data/us.json').subscribe(res => this.companyName = res.json().name);

    this.http.get('data/us.json').subscribe(res => this.companyPhone = res.json().contact.phone);
    this.http.get('data/us.json').subscribe(res => this.companyMailHq = res.json().contact.mail.hq);
    this.http.get('data/us.json').subscribe(res => this.companyMailSupport = res.json().contact.mail.support);

    this.http.get('data/us.json').subscribe(res => this.companyCity = res.json().place.city);
    this.http.get('data/us.json').subscribe(res => this.companyAddress = res.json().place.adress);
    this.http.get('data/us.json').subscribe(res => this.companyPostcode = res.json().place.postcode);
  }
}
