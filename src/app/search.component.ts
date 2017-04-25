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
				'1 rum',
				'2 rum',
				'3 rum',
				'4 rum',
				'5 rum',
				'6 rum',
				'7 rum',
				'8 rum',
				'visa alla'
			],
			selectedOption: ''
		},
		{
			type: 'Boarea(min)',
			options: [
				'25 m²',
				'50 m²',
				'75 m²',
				'100 m²',
				'150 m²',
				'200 m²',
				'250 m²',
				'300 m²',
				'visa alla'
			],
			selectedOption: ''
		},
		{
			type: 'Typ av bostad',
			options: [
				'Alla bostadstyper',
				'Bostadsrätt',
				'Villa',
				'Fritidshus',
				'visa alla'
			],
			selectedOption: ''
		},{
			type: 'Pris(max)',
			options: [
				'500 000',
				'750 000',
				'1 000 000',
				'2 000 000',
				'3 000 000',
				'4 000 000',
				'5 000 000',
				'7 000 000',
				'10 000 000',
				'15 000 000',
				'30 000 000',
				'visa alla'
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
			this.globalMem.searchValues = 'find/{ type: /'+ value +'*/i }';
		}

	}

	chooseFilter(filter: Object, option: string){
		let filterIndex = this.localMem.filters.indexOf(filter);
		if(option === 'visa alla'){
			this.localMem.filters[filterIndex].selectedOption = '';
		}
		else{
			this.localMem.filters[filterIndex].selectedOption = option; 
		}
	}
}
