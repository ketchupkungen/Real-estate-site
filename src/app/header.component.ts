import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'templates/header.html',
})
export class HeaderComponent { 
	logo = 'Dhyr & Rumson';
	menuChoices = [
		'Sälja',
		'Köpa',
		'Kontakt'
	];
}