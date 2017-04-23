import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'templates/header-component.html',
})
export class HeaderComponent /*implements OnInit*/{
	isNavbarCollapsed = true;

	//logo = "Dhyr & Rumson";
	/*fullImagePath: string;

	constructor() {
		this.fullImagePath = '/img/logo.png'
	}

	ngOnInit() {
	}*/

	
	menuLinks = [
		{
			name: 'Sök bostad',
			path: 'search-page'
		},
		{
			name: 'Sälja',
			path: 'sell-page'
		},
		{
			name: 'Kontakt',
			path: 'contact-page'
		}
	];
}