import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SalesObjectService } from './sales-object.service';
import { SalesObject } from '../class/sales-object.class';
 
@Component({
  selector: 'object-detail-component',
  templateUrl: 'templates/object-detail.component.html',
  styleUrls: ['css/object-detail.component.css'],
  providers: [SalesObjectService]
})
export class ObjectDetailComponent implements OnInit {
	
	salesObject: any;

	constructor(
		private salesObjectService: SalesObjectService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.salesObjectService.getObject(+params['id']))
			.subscribe(object => this.salesObject = object);
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return this.salesObjectService.getSalesObjectImg(salesObject, indexNo);
	}

}