import { Component } from '@angular/core';

@Component({
  selector: 'search-result',
  templateUrl: 'templates/search-result.html',
})
export class SearchResultComponent {
	sortingOptions = [
		{
			type: 'Pris',
			options: [
				'Lägst till Högst',
				'Högst till Lägst'
			]
		},
		{
			type: 'Datum tillagt',
			options: [
				'Nyast först',
				'Äldst först'
			]
		}
	];
}