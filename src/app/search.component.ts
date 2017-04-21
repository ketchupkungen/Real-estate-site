import { Component, OnInit } from '@angular/core';
import { MemService } from './mem.service';

@Component({
  selector: 'search',
  templateUrl: 'templates/search-component.html',
  styleUrls: ['css/search-component.css']
})

export class SearchComponent implements OnInit{
	localMem: any;
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
				'25 kvm',
				'50 kvm',
				'75 kvm',
				'100 kvm',
				'150 kvm',
				'200 kvm',
				'250 kvm',
				'300 kvm',
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

	constructor(private memService: MemService){
		this.localMem = memService.get(this);
	}

	ngOnInit(){
		if(!this.localMem.filters){
			this.localMem.filters = this.filters;
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
