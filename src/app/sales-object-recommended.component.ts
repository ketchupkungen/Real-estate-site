import { Component, OnInit } 				from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { Location } 								from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SalesObjectService } from './sales-object.service';
import { SalesObject } 				from '../class/sales-object.class';

@Component({
  selector: 'sales-object-recommended',
  templateUrl: 'templates/sales-object-recommended.html',
  styleUrls: ['css/sales-object-recommended.css'],
  providers: [SalesObjectService]
})

export class SalesObjectRecommendedComponent implements OnInit {
	salesObjects: SalesObject[];
	filterSalesObject: SalesObject;
	sortNewest=['-dateAdded'];

	constructor(
		private salesObjectService: SalesObjectService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.salesObjectService.getObject(+params['id']))
			.subscribe(object => this.filterSalesObject = object);

		this.getSalesObjects();
	}

	getSalesObjects(): void {
		this.salesObjectService.getSalesObjects().then(salesObjects => this.salesObjects = salesObjects);
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return this.salesObjectService.getSalesObjectImg(salesObject, indexNo);
	}

}