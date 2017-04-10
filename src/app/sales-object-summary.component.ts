import { Component, OnInit } 		from '@angular/core';

import { SalesObjectService } from './sales-object.service';
import { SalesObject } 				from '../class/sales-object.class';

@Component({
  selector: 'sales-object-summary',
  templateUrl: 'templates/sales-object-summary.html',
  styleUrls: ['css/sales-object-summary.css']
})

export class SalesObjectSummaryComponent implements OnInit {
	salesObject: SalesObject;

	constructor(private _salesObjectService: SalesObjectService) { }

	ngOnInit(): void {
		this.getSalesObject();
	}

	//This method only returns 1 object, the first one (will get a specific object from a service later)
	getSalesObject(): void {
		this._salesObjectService.getSalesObjects().then(salesObjects => this.salesObject = salesObjects.shift());
	}
}