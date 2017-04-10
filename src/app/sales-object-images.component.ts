import { Component, OnInit } from '@angular/core';
import { SalesObjectService } from './sales-object.service';
import { SalesObject } 	from '../class/sales-object.class';

@Component({
    selector: 'sales-object-images',
    templateUrl: 'templates/sales-object-images.html',
    styleUrls: ['css/sales-object-images.css']
})

export class SalesObjectImagesComponent implements OnInit {
    
    private salesObjects : SalesObject[];
    
    constructor(private _salesObjectService: SalesObjectService) { }

	ngOnInit(): void {
		//
	}
}
