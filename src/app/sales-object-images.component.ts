import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sales-object-images',
    templateUrl: 'templates/sales-object-images.html',
    styleUrls: ['css/sales-object-images.css'],
    providers: [NgbCarouselConfig]
})

export class SalesObjectImagesComponent {
    constructor(config: NgbCarouselConfig) {
        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = true;
        config.keyboard = true;
    }
}
