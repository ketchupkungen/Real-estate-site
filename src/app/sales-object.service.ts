import { Injectable } 						from '@angular/core';
import { Http } 									from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import { RestService } from './rest.service';

import { SalesObject } from '../class/sales-object.class';

@Injectable()
export class SalesObjectService { 

	constructor(
		private http: Http,
		private restService: RestService,
		private route: ActivatedRoute
	){ }

	getSalesObjects(){
    let Sales = this.restService.newRestEntity("sale");

    return new Promise((resolve, reject)=>{
      Sales.find('').then((data: any) => {
        resolve(data);
      });
    });
	}

	getSalesObjectById(){
		let Sales = this.restService.newRestEntity("sale");

  	return new Promise((resolve, reject)=>{
		  this.route.params
		    .switchMap((params: Params) => Sales.find(params['id']))
		    .subscribe(object => resolve(object));
    });
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return "url('" + salesObject.img[indexNo].src + "')";
	}

	getSalesObjectLayout(salesObject: SalesObject, indexNo: number):string {
		return "url('" + salesObject.layout[indexNo].src + "')";
	}

  getSalesObjectSellerId(salesObject: SalesObject){
    return salesObject.sellerId;
  }
}