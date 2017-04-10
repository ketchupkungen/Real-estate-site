import { Component, OnInit } 		from '@angular/core';

import { SalesObjectService } from './sales-object.service';
import { SalesObject } 				from '../class/sales-object.class';

@Component({
  selector: 'sales-object-small',
  templateUrl: 'templates/sales-object-small.html',
  styleUrls: ['css/sales-object-small.css']
})

export class SalesObjectSmallComponent implements OnInit {
	salesObjects: SalesObject[];

	constructor(private _salesObjectService: SalesObjectService) { }

	ngOnInit(): void {
		this.getSalesObjects();
	}

	getSalesObjects(): void {
		this._salesObjectService.getSalesObjects().then(salesObjects => this.salesObjects = salesObjects);
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return "url('" + salesObject.img[indexNo].src + "')";
	}

}