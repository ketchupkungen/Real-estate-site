import { Component, OnInit }	from '@angular/core';

import { SalesObjectService }	from './sales-object.service';
import { MemService }					from './mem.service';
import { RestService }				from './rest.service';
import { SearchService }        from './search-service';

import { SalesObject } 				from '../class/sales-object.class';

@Component({
  selector: 'sales-object-small',
  templateUrl: 'templates/sales-object-small.html',
  styleUrls: ['css/sales-object-small.css']
})

export class SalesObjectSmallComponent implements OnInit {
	localMem: any;
	salesObjects: any;
	sortingTypes = [
		{
			name: 'Pris',
			value: 'price'
		},
		{
			name: 'Datum tillagt',
			value: 'dateAdded'
		},
		{
			name: 'Byggnadsår',
			value: 'buildDate'
		},
		{
			name: 'Bo-yta',
			value: 'area'
		}
	];
	selectedOption = ['-dateAdded'];
	selectedType = this.sortingTypes[1];

	constructor(
		private salesObjectService: SalesObjectService,
		private memService: MemService,
		private restService: RestService,
    private searchService: SearchService
	) { 
		this.localMem = memService.get(this);
	}

	ngOnInit(): void {
		this.localMem.sortingTypes = this.sortingTypes;
		if(!this.localMem.selectedType){
			this.localMem.selectedType = this.selectedType;
		}
		if(!this.localMem.selectedOption){
			this.localMem.selectedOption = this.selectedOption;
		}
    this.searchService.getSearchResult().then((data: any) => {
      this.salesObjects = data;
    });
	}

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return this.salesObjectService.getSalesObjectImg(salesObject, indexNo);
	}

	toggleOption(type: any){
		if(type.name === this.localMem.selectedType.name){
			if(this.localMem.selectedOption[0].charAt(0) === '-'){
				this.localMem.selectedOption = [type.value];
			}
			else{
				this.localMem.selectedOption = ['-' + type.value];	
			}
		}
		else{
			this.localMem.selectedType = type;
			this.localMem.selectedOption = [type.value];
		}
	}

	numberWithSpaces(price:number) {
	  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
	}
}
