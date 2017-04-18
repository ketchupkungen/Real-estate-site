import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component ({
  selector: 'sales-object-contact',
  templateUrl: 'templates/sales-object-contact.html',
  styleUrls: ['css/sales-object-contact.css']
})

export class SalesObjectContactComponent {

  constructor (private http: Http) {
    this.http.get('data/us.json').subscribe();
  }
  ngOnInit () {

  }
}