import { Component} from '@angular/core';

@Component({
	selector: 'planritningssidan',
	templateUrl: 'templates/planritningssidan.html',
	styleUrls: [ './planritningssidan.component.css' ]
})

export class PlanritningssidanComponent {
	planritningar = [ 
	"img/planritning1.jpg",
	"img/planritning2.jpg",
	"img/planritning3.jpg" 
	];

}