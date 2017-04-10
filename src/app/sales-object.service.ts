import { Injectable } from '@angular/core';
import { Http } 			from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SalesObject } from '../class/sales-object.class';

@Injectable()
export class SalesObjectService { 

	private _objectsUrl = '/data/object.json';

	constructor(private _http: Http){ }

	getObjects(): Promise<Object[]> {
		return this._http.get(this._objectsUrl)
							 .toPromise()
							 .then(response => response.json() as Object[])
 							 .catch(this.handleError);
	}

	// getObject(id: number): Promise<Object> {
	// 	return this.getObjects()
	// 				.then(objects => objects.find(object => object.id === id));
	// }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.mesage || error);
	}
}