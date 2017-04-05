import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'templates/header-component.html',
})
export class HeaderComponent {
	isNavbarCollapsed = true;

	logo = 'Dhyr & Rumson';
	menuLinks = [
		'Sälja',
		'Köpa',
		'Kontakt'
	];
}