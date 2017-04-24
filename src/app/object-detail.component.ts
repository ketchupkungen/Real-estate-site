import { Component, OnInit } 			from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RestService }					from './rest.service';
import { SalesObjectService } 	from './sales-object.service';
import { SalesObject } 					from '../class/sales-object.class';

@Component({
  selector: 'object-detail-component',
  templateUrl: 'templates/object-detail.component.html',
  styleUrls: ['css/object-detail.component.css']
})
export class ObjectDetailComponent implements OnInit {
	salesObject: SalesObject;

	constructor(
		private salesObjectService: SalesObjectService,
		private route: ActivatedRoute,
		private restService: RestService
	){}

	ngOnInit(): void {
    let Sales = this.restService.newRestEntity("sale");
    let id = this.route.snapshot.params['id'];

    Sales.find(id).then((data:any)=>{
      this.salesObject = data;
    });
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return this.salesObjectService.getSalesObjectImg(salesObject, indexNo);
	}

}
