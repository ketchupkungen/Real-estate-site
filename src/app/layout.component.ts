import { Component} from '@angular/core';

@Component({
	selector: 'layout',
	templateUrl: 'templates/layout.html',
	styleUrls: [ './layout.component.css' ]
})

export class LayoutComponent {
	layouts = [ 
	"img/planritning1.jpg",
	"img/planritning2.jpg",
	"img/planritning3.jpg" 
	];

}