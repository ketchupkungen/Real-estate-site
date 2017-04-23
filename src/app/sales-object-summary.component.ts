import { Component, OnInit } 			from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } 							from '@angular/common';

import { RestService }					from './rest.service';
import { SalesObject } 					from '../class/sales-object.class';

@Component({
  selector: 'sales-object-summary',
  templateUrl: 'templates/sales-object-summary.html',
  styleUrls: ['css/sales-object-summary.css']
})

export class SalesObjectSummaryComponent implements OnInit {
	salesObject: SalesObject;

	constructor(
		private route: ActivatedRoute,
		private restService: RestService,
		private location: Location
	) { }

	ngOnInit(): void {
    let Sales = this.restService.newRestEntity("sale");
    let id = this.route.snapshot.params['id'];

    Sales.find(id).then((data:any)=>{
      this.salesObject = data;
    });
	}

}