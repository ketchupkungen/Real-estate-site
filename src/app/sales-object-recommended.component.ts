import { Component, OnInit } 				from '@angular/core';
import { ActivatedRoute, Params } 	from '@angular/router';
import { Location } 								from '@angular/common';

import { RestService }				from './rest.service';
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
	filterSalesObject: any;
	sortNewest=['-dateAdded'];

	constructor(
		private salesObjectService: SalesObjectService,
		private route: ActivatedRoute,
		private restService: RestService,
		private location: Location
	){}

	ngOnInit(): void {
    let Sales = this.restService.newRestEntity("sale");
    let id = this.route.snapshot.params['id'];

    Sales.find(id).then((data:any)=>{
      this.filterSalesObject = data;
    });

    Sales.find('').then((data:any)=>{
      this.salesObjects = data;
    });
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return this.salesObjectService.getSalesObjectImg(salesObject, indexNo);
	}

  numberWithSpaces(price:number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
}
