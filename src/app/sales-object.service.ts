import { Injectable } 						from '@angular/core';
import { Http } 									from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { RestService } from './rest.service';

import { SalesObject } from '../class/sales-object.class';

@Injectable()
export class SalesObjectService { 

	constructor(
		private http: Http,
		private restService: RestService,
	){ }

	getSalesObjects(){
    let Sales = this.restService.newRestEntity("sale");

    return Sales.find('');
	}

	getSalesObjectById(route: any){
		let Sales = this.restService.newRestEntity("sale");

		return new Promise((resolve, reject)=>{
		  route.params
		    .switchMap((params: Params) => Sales.find(params['id']))
		    .subscribe((data: any) => {
        	resolve(data);
        });
    });
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return "url('" + salesObject.img[indexNo].src + "')";
	}

	getSalesObjectLayout(salesObject: SalesObject, indexNo: number):string {
		return "url('" + salesObject.layout[indexNo].src + "')";
	}

  getSalesObjectBrokerId(salesObject: SalesObject){
    return salesObject.brokerId;
  }
}