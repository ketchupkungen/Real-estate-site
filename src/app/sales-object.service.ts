import { Injectable } from '@angular/core';
import { Http } 			from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SalesObject } from '../class/sales-object.class';

@Injectable()
export class SalesObjectService { 

	private _salesObjectsUrl = './data/sales-objects.json';

	constructor(private _http: Http){ }

	getSalesObjects(): Promise<SalesObject[]> {
		return this._http.get(this._salesObjectsUrl)
							 .toPromise()
							 .then(response => response.json().data as SalesObject[])
 							 .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.mesage || error);
	}
}