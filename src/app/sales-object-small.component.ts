import { Component, OnInit } 		from '@angular/core';

import { SalesObjectService } from './sales-object.service';
import { SalesObject } 	from '../class/sales-object.class';

@Component({
  selector: 'sales-object-small',
  templateUrl: 'templates/sales-object-small.html',
  styleUrls: ['css/sales-object-small.css']
})

export class SalesObjectSmallComponent implements OnInit {
	salesObjects: SalesObject[];
	sortArgs=['-dateAdded'];
	sortingOptions = [
		{
			name: 'Pris',
			options: [
				{
					type: 'price',
					name: 'Lägsta till högsta'
				},
				{
					type: '-price',
					name: 'Högsta till lägsta'
				}
			]
		},
		{
			name: 'Datum tillagt',
			options: [
				{
					type: '-dateAdded',
					name: 'Nyaste först'
				},
				{
					type: 'dateAdded',
					name: 'Äldsta först'
				}
			]
		},
		{
			name: 'Byggnadsår',
			options: [
				{
					type: '-buildDate',
					name: 'Yngsta först'
				},
				{
					type: 'buildDate',
					name: 'Äldsta först'
				}
			]
		},
		{
			name: 'Antal rum',
			options: [
				{
					type: 'rooms',
					name: 'Minst rum först'
				},
				{
					type: '-rooms',
					name: 'Flest rum först'
				}
			]
		}
	];

	constructor(private salesObjectService: SalesObjectService) { }

	ngOnInit(): void {
		this.getSalesObjects();
	}

	getSalesObjects(): void {
		this.salesObjectService.getSalesObjects().then(salesObjects => this.salesObjects = salesObjects);
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return this.salesObjectService.getSalesObjectImg(salesObject, indexNo);
	}

	changeSortArgs(arg:string){
		this.sortArgs = [arg];
	}

}