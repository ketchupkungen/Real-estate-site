import { Injectable }   from '@angular/core';
import { RestService }	from './rest.service';
import { Http } 			  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { MemService }   from './mem.service';

import { SalesObject }  from '../class/sales-object.class';

@Injectable()
export class SearchService {

  salesObject: SalesObject;
  data: any;
  globalMem: any;

	constructor(
    private http: Http,
    private restService: RestService,
    private memService: MemService
  ){ }

  getSearchResult(): any {
    this.globalMem = this.memService.global();

    let Sales = this.restService.newRestEntity('sale');

    return new Promise((resolve, reject)=>{
      Sales.find(this.globalMem.searchValues || '').then((data: any) => {
        resolve(data);
      });
    });
	}
}
