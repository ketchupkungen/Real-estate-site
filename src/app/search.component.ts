import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: 'templates/search-component.html',
  styleUrls: ['css/search-component.css']
})

export class SearchComponent {
	filterOptions = [
		{
			type: 'Rum(min)',
			options: [
				'1 rum',
				'2 rum',
				'3 rum',
				'4 rum',
				'5 rum',
				'6 rum'
			]
		},
		{
			type: 'Boarea(min)',
			options: [
				'25 kvm',
				'50 kvm',
				'75 kvm',
				'100 kvm',
				'150 kvm',
				'200 kvm'
			]
		},
		{
			type: 'Typ av bostad',
			options: [
				'Alla bostadstyper',
				'Bostadsrätt',
				'Villa',
				'Fritidshus',
			]
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
				'inget maxpris'
			]
		}
	];
}
