import { Component, OnInit, Input } 		from '@angular/core';

import { SalesObjectService } from './sales-object.service';
import { SalesObject } 				from '../class/sales-object.class';

@Component({
  selector: 'sales-object-recommended',
  templateUrl: 'templates/sales-object-recommended.html',
  styleUrls: ['css/sales-object-recommended.css']
})

export class SalesObjectRecommendedComponent implements OnInit {
	@Input() activeSalesObject: any;

	salesObjects: SalesObject[];
	sortNewest=['-dateAdded'];
	filterFrom: any;

	constructor(private salesObjectService: SalesObjectService) { }

	ngOnInit(): void {
		this.getSalesObjects();
		this.filterFrom=this.activeSalesObject;
	}

	getSalesObjects(): void {
		this.salesObjectService.getSalesObjects().then(salesObjects => this.salesObjects = salesObjects);
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return this.salesObjectService.getSalesObjectImg(salesObject, indexNo);
	}

}