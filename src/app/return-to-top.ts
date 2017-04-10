import { Component} from '@angular/core';

@Component({
	selector: 'return-to-top',
	templateUrl: 'templates/return-to-top.html',
	styleUrls: [ 'css/return-to-top.css' ]
})

export class ReturnToTop {

    goTo( ) {
      // this will scroll the page up
      window.location.hash = 'myAnchor';

      // after page scrolls up, scroll down to correct level
      // https://github.com/angular/angular/issues/6595
      setTimeout(() => {
        document.querySelector('#myAnchor').parentElement.scrollIntoView();
      });
    }

}




// ===== Scroll to Top ====
/* 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 700);
});*/