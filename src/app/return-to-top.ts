import { Component} from '@angular/core';

@Component({
	selector: 'return-to-top',
	templateUrl: 'templates/return-to-top.html',
	styleUrls: [ 'css/return-to-top.css' ]
})

export class ReturnToTop {

    showScrollToTop() {

      function showScroller(){
          window.scroll();
          if (window.pageYOffset >= 50) {
              // nedanstående rad fick npm install att krasha
              //('#return-to-top').fadeIn(200);
          } else {
              // nedanstående rad fick npm install att krasha
              // ('#return-to-top').fadeOut(200);
          }
      }
      showScroller();
    }

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
