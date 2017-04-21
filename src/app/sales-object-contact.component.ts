import { Component, OnInit } 		from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Http } from '@angular/http';

import 'rxjs/add/operator/switchMap';

import { SalesObjectService } from './sales-object.service';
import { SalesObject } 	from '../class/sales-object.class';

@Component ({
  selector: 'sales-object-contact',
  templateUrl: 'templates/sales-object-contact.html',
  styleUrls: ['css/sales-object-contact.css']
})

export class SalesObjectContactComponent {
  private salesObject: SalesObject;
  private us: any;
  private brooker: Object;

	constructor(
		private salesObjectService: SalesObjectService,
		private route: ActivatedRoute,
		private location: Location,
    private http: Http
	) {}

	ngOnInit(): void {
    // Get content of us.json 
    this.http.get('./data/us.json')
        .map(res => res.json())
        .subscribe(us => this.us = us,
          err => console.log(err));

    // Find the amenable brooker for clicked salesObject
    this.route.params
			.switchMap((params: Params) => this.salesObjectService.getObject(+params['id']))
			.subscribe((object: any) => {
        this.salesObject = object;
        this.brooker = this.us.sellers[this.salesObject.sellerId];
        console.log(this.salesObject);
        console.log(this.brooker);
      });
	}
}