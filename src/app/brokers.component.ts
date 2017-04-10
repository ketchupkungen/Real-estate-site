import { Component } 		from '@angular/core';
import { Http } 			  from '@angular/http';

@Component({
  selector: 'brokers',
  templateUrl: 'templates/view-all-brokers.html',
  styleUrls: ['css/brokers.component.css']
})

export class brokersComponent {

  brokersObj:any;

  constructor(private http:Http) {
    this.http.get('data/us.json')
      .subscribe(res => this.brokersObj = res.json());
  }

  sellersObject = this.brokersObj.sellers;

	getBrokerProfileImage(sellerObject:any):string {
		return sellerObject.profile_image_src;
	}

}
