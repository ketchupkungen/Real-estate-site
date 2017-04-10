import { Component} from '@angular/core';

@Component({
	selector: 'footer',
	templateUrl: 'templates/footer.html',
	styleUrls: [ 'css/footer.component.css' ]
})

export class FooterComponent {

	tags = [

		'Kontakter',
		'Om oss',
		'Support'

	];

}