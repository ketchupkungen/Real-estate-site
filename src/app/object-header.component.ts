import { Component } from '@angular/core';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'object-header',
  templateUrl: 'templates/object-header.html',
  styleUrls: ['app/object-header.component.css'],
  providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})
export class ObjectHeaderComponent {

    constructor(config: NgbTabsetConfig) {
      // customize default values of tabsets used by this component tree
      config.justify = 'center';
      config.type = 'pills';
    }


    /*links = [
            'Översikt',
            'Fakta',
            'Bilder',
            'Planritning',
            'Kontakt'
    ];*/
    activeLink: string = 'Översikt';
    setActive(activeLink: string) {
        this.activeLink = activeLink;
    }
}
