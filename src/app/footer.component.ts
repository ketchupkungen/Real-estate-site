import { Component} from '@angular/core';

@Component({
	selector: 'footer',
	templateUrl: 'templates/footer.html',
	styleUrls: [ './footer.component.css' ]
})

export class FooterComponent {

	tags = [

		'Kontakter',
		'Om oss',
		'Support'

	];

}