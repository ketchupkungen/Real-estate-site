import { Component, OnInit } 		  from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { RestService }            from './rest.service';

import { SalesObject } 	          from '../class/sales-object.class';
import { BrokersObject }          from '../class/broker-object.class';

@Component ({
  selector: 'sales-object-contact',
  templateUrl: 'templates/sales-object-contact.html',
  styleUrls: ['css/sales-object-contact.css']
})

export class SalesObjectContactComponent {
  private salesObject: SalesObject;
  private brokersObject: BrokersObject;
  private brokerObject: any; 

	constructor(
    private restService: RestService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {

    // Find the amenable brooker for clicked salesObject
    let Sales = this.restService.newRestEntity("sale");
    let id = this.route.snapshot.params['id'];
    let Brokers = this.restService.newRestEntity("broker");

    Sales.find(id).then((data:any)=>{
      this.salesObject = data;
      Brokers.find(this.salesObject.sellerId).then((data:any)=>{
        console.log(data);
        this.brokerObject = data[0];
      });
    });
	}
}