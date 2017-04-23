import { Injectable } from '@angular/core';
import { Http } 			from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SalesObject } from '../class/sales-object.class';

@Injectable()
export class SalesObjectService { 

	constructor(private _http: Http){ }

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