import { Component} from '@angular/core';

@Component({
	selector: 'layout',
	templateUrl: 'templates/layout.html',
	styleUrls: [ 'css/layout.component.css' ]
})

export class LayoutComponent {
	layouts = [ 
		{description:"Ett exempel på planritning", img:"img/layout1.jpg"},
		{description:"Ett annat exempel på planritning", img:"img/layout2.jpg"},
		{description:"Ett tredje exempel på planritning", img:"img/layout3.jpg"}
	];

	scrollToTop(){

		function scroller(){
			window.scrollBy(0,-40);
			if(window.pageYOffset > 0){
				setTimeout(scroller,20);
			}
		}
		scroller();
	}

}