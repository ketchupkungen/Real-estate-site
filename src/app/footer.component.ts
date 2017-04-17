import { Component} from '@angular/core';

@Component({
	selector: 'footer',
	templateUrl: 'templates/footer.html',
	styleUrls: [ 'css/footer.component.css' ]
})

export class FooterComponent {

	tags = [

		{
			name: 'Kontakt',
			link: 'contact-page'
		},
		{
			name: 'Om oss',
			link: '/'
		},
		{
			name: 'Jobb',
			link: '/'
		}


	];

	scrollToTop(){

		function scroller(){
			window.scrollBy(0,-40);
			if(window.pageYOffset > 0){
				setTimeout(scroller,10);
			}
		}
		scroller();
	}

}