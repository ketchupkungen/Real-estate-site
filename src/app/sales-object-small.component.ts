import { Component } 		from '@angular/core';

import { SalesObject } from '../class/sales-object.class';

const OBJECTS: Object[] = 
[
	{
		"id": 1,
		"type": "Bostadsrättslägenhet",
		"price": 350000,
		"priceMonth": 3900,
		"buildDate": 1978,
		"showings":[
			{
				"from":"2017-05-01 12:00:00",
				"to":"2017-05-01 16:00:00"
			}
		],
		"sold": false,
		"rooms": 4,
		"bathrooms": 1,
		"area": 80,
		"totalArea": 120,
		"sellerId": 2,
		"place": {
			"city": "Malmö",
			"municipality": "Malmö",
			"adress": "Gullesväg 1",
			"postcode": 27032
		},
		"info": "Gedigen villa från 1926 som totalrenoverats och byggts ut med varsam hand. Resultatet - ett unikt och modernt hus med mycket charm! Beläget på en hörntomt där Irisgatan möter Södertorpsvägen finner vi det med en stor härlig tomt.",
		"img": [
			{"src":"/img/objectId1-img1.jpg"},
			{"src":"/img/objectId1-img2.jpg"},
			{"src":"/img/objectId1-img3.jpg"},
			{"src":"/img/objectId1-img4.jpg"},
			{"src":"/img/objectId1-img5.jpg"},
			{"src":"/img/objectId1-img6.jpg"},
			{"src":"/img/objectId1-img7.jpg"}
		]
	},
	{
		"id": 2,
		"type": "Bostadsrättsradhus",
		"price": 600000,
		"priceMonth": 5600,
		"buildDate": 1990,
		"showings":[
			{
				"from":"2017-04-21 10:00:00",
				"to":"2017-04-21 13:00:00"
			}
		],
		"sold":false,
		"rooms": 7,
		"bathrooms": 2,
		"area": 140,
		"totalArea": 170,
		"sellerId": 1,
		"place": {
			"city": "Kivik",
			"municipality": "Simrishamn",
			"adress": "Skånevägen 3",
			"postcode": 27143
		},
		"info": "Ett hus att sämja dem, ett hus att främja dem, ett hus att djupt i mörkrets vida riken tämja dem!",
		"img": [
			{"src":"img/objectId2-img1.jpg"},
			{"src":"img/objectId2-img2.jpg"},
			{"src":"img/objectId2-img3.jpg"},
			{"src":"img/objectId2-img4.jpg"},
			{"src":"img/objectId2-img5.jpg"},
			{"src":"img/objectId2-img6.jpg"}
		]
	}
	,
	{
		"id": 3,
		"type": "Villa",
		"price": 1200000,
		"priceMonth": 3400,
		"buildDate": 1990,
		"showings":[
			{
				"from":"2017-04-21 10:00:00",
				"to":"2017-04-21 13:00:00"
			}
		],
		"sold": true,
		"rooms": 5,
		"bathrooms": 1,
		"area": 120,
		"totalArea": 180,
		"sellerId": 1,
		"place": {
			"city": "Brösarp",
			"municipality": "Tomelilla",
			"adress": "Kristianstadsvägen 23",
			"postcode": 29142
		},
		"info": "Nämndemansgården med anor från 1800-talet. 7 rum och kök fördelade på ca 250 kvm bostadsyta. Gäststuga , ekonomibyggnad, ladugård samt garage. Trädgårdstomt med stort antal fruktträd. Öppen åkermark. Bostadshuset är i behov av renovering men full av charm och möjligheter.",
		"img": [
			{"src":"img/objectId3-img1.jpg"},
			{"src":"img/objectId3-img2.jpg"},
			{"src":"img/objectId3-img3.jpg"},
			{"src":"img/objectId3-img4.jpg"},
			{"src":"img/objectId3-img5.jpg"},
			{"src":"img/objectId3-img6.jpg"}
		]
	}
];

@Component({
  selector: 'sales-object-small',
  templateUrl: 'templates/sales-object-small.html',
  styleUrls: ['css/sales-object-small.css']
})

export class SalesObjectSmallComponent {
	salesObjects = OBJECTS;

	getSalesObjectImg(salesObject: SalesObject, indexNo: number):string {
		return "url('" + salesObject.img[indexNo].src + "')";
	}

}