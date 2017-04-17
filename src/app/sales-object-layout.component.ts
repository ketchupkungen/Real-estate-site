import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SalesObjectService } from './sales-object.service';
import { SalesObject } 	from '../class/sales-object.class';

@Component({
	selector: 'layout',
	templateUrl: 'templates/sales-object-layout.html',
	styleUrls: [ 'css/sales-object-layout.css' ]
})

export class SalesObjectLayoutComponent implements OnInit {

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



	/*layouts = [ 
		{description:"Våning 1", img:"img/layout1.jpg"},
		{description:"Våning 2", img:"img/layout2.jpg"},
		{description:"Våning 3", img:"img/layout3.jpg"}
	];*/
}