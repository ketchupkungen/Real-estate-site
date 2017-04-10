import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SalesObjectService } from './sales-object.service';
import { SalesObject } from '../class/sales-object.class';
 
@Component({
  selector: 'object-detail-component',
  templateUrl: `<h1>Hus {{object.id }} detaljer</h1>`,
  providers: [SalesObjectService]
})
export class ObjectDetailComponent implements OnInit {
	
	object: Object;

	constructor(
		private salesObjectService: SalesObjectService,
		private route: ActivatedRoute,
		private location: Location
	){}

	ngOnInit(): void {
		// this.route.params
		// 	.switchMap((params: Params) => this.salesObjectService.getObject(+params['id']))
		// 	.subscribe(object => this.object = object);
	}

}