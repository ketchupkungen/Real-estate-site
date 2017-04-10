import { Component } 		from '@angular/core';
import { Http } 			  from '@angular/http';

@Component({
  selector: 'brokers',
  templateUrl: 'templates/view-all-brokers.html',
  styleUrls: ['css/brokers.component.css']
})

export class BrokersComponent {

  sellersObject:any;

  constructor(private http:Http) {
    this.http.get('data/us.json')
      .subscribe(res => this.sellersObject = res.json().sellers);
  }

	getBrokerProfileImage(sellerObject:any):string {
		return sellerObject.profile_image_src;
	}

}
