import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SalesObjectService } from './sales-object.service';
import { SalesObject } 	from '../class/sales-object.class';

@Component({
    selector: 'sales-object-images',
    templateUrl: 'templates/sales-object-images.html',
    styleUrls: ['css/sales-object-images.css']
})

export class SalesObjectImagesComponent implements OnInit {
    
    salesObject: SalesObject[];
    
    constructor(
		private salesObjectService: SalesObjectService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.salesObjectService.getObject(+params['id']))
            .subscribe((object: any) => this.salesObject = object);
	}
}
