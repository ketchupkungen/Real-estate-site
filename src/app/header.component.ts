import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'templates/header-component.html',
})
export class HeaderComponent {
	isNavbarCollapsed = true;

	logo = 'Dhyr & Rumson';
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