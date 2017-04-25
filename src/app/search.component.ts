import { Component, OnInit } from '@angular/core';
import { MemService } from './mem.service';

@Component({
  selector: 'search',
  templateUrl: 'templates/search-component.html',
  styleUrls: ['css/search-component.css']
})

export class SearchComponent implements OnInit{
	localMem: any;
	globalMem: any;
 	filters = [
		{
			type: 'Rum(min)',
			options: [
				{
					name: '1 rum',
					value: '1'
				},
				{
					name: '2 rum',
					value: '2'
				},
				{
					name: '3 rum',
					value: '3'
				},
				{
					name: '4 rum',
					value: '4'
				},
				{
					name: '5 rum',
					value: '5'
				},
				{
					name: '6 rum',
					value: '6'
				},
				{
					name: '7 rum',
					value: '7'
				},
				{
					name: 'visa alla',
					value: ''
				}
			],
			selectedOption: ''
		},
		{
			type: 'Boarea(min)',
			options: [
				{
					name: '25 m²',
					value: '25'
				},
				{
					name: '50 m²',
					value: '50'
				},
				{
					name: '75 m²',
					value: '75'
				},
				{
					name: '100 m²',
					value: '100'
				},
				{
					name: '150 m²',
					value: '150'
				},
				{
					name: '200 m²',
					value: '200'
				},
				{
					name: '250 m²',
					value: '250'
				},
				{
					name: '300 m²',
					value: '300'
				},
				{
					name: 'visa alla',
					value: ''
				}
			],
			selectedOption: ''
		},
		{
			type: 'Typ av bostad',
			options: [
				{
					name: 'Bostadsrätt',
					value: '25'
				},
				{
					name: 'Villa',
					value: '50'
				},
				{
					name: 'Fritidshus',
					value: '75'
				},
				{
					name: 'visa alla',
					value: ''
				}
			],
			selectedOption: ''
		},{
			type: 'Pris(max)',
			options: [
				{
					name: '500 000 kr',
					value: '500000'
				},
				{
					name: '750 000 kr',
					value: '750000'
				},
				{
					name: '1 000 000 kr',
					value: '1000000'
				},
				{
					name: '2 000 000 kr',
					value: '2000000'
				},
				{
					name: '3 000 000 kr',
					value: '3000000'
				},												
				{
					name: '4 000 000 kr',
					value: '4000000'
				},
				{
					name: '5 000 000 kr',
					value: '5000000'
				},
				{
					name: '7 000 000 kr',
					value: '7000000'
				},
				{
					name: '10 000 000 kr',
					value: '10000000'
				},
				{
					name: '15 000 000 kr',
					value: '15000000'
				},
				{
					name: '30 000 000 kr',
					value: '30000000'
				},
				{
					name: 'visa alla',
					value: ''
				}
			],
			selectedOption: ''
		}
	];

	constructor(
			private memService: MemService
		){
		this.localMem = memService.get(this);
	}

	ngOnInit(){
		if(!this.localMem.filters){
			this.localMem.filters = this.filters;
		}
	}

	onKey(event: any){
		this.saveSearchValues(event.target.value);
	  this.globalMem.salesObjectSmallUpdate();
	}

	saveSearchValues(value: any){
		this.globalMem = this.memService.global();

		if(!value || value === '') {
			this.globalMem.searchValues = '';
		} else {
			this.globalMem.searchValues = value;
		};
	}

	chooseFilter(filter: Object, option: string){
		let filterIndex = this.localMem.filters.indexOf(filter);
		if(option['name'] === 'visa alla'){
			this.localMem.filters[filterIndex].selectedOption = '';
		}
		else{
			this.localMem.filters[filterIndex].selectedOption = option['name']; 
		}
	}
}
