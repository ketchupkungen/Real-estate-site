import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { RestService }          from './rest.service';
import { SalesObject } 	        from '../class/sales-object.class';

@Component({
  selector: 'sales-object-images',
  templateUrl: 'templates/sales-object-images.html',
  styleUrls: ['css/sales-object-images.css']
})

export class SalesObjectImagesComponent implements OnInit {
  salesObject: SalesObject;
  
  constructor(
    private route: ActivatedRoute,
    private restService: RestService,
    private location: Location
   ){}

	ngOnInit(): void {
    let Sales = this.restService.newRestEntity("sale");
    let id = this.route.snapshot.params['id'];

    Sales.find(id).then((data:any)=>{
      this.salesObject = data;
    });
	}
}
