import { Injectable } from '@angular/core';
import { RestService }				from './rest.service';
import { Http } 			from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SalesObject } from '../class/sales-object.class';

@Injectable()
export class SearchService {

  salesObject: SalesObject;
  data: any;

	constructor(
    private _http: Http,
    private restService: RestService
    ){ }

  getSearchResult(): any {
    let Sales = this.restService.newRestEntity('sale');

    return new Promise((resolve, reject)=>{
      Sales.find(' ').then((data: any) => {
        resolve(data);
      });
    });
	}
}
