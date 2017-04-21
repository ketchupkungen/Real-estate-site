import { Injectable } from "@angular/core";
import { Http } 			from "@angular/http";
import { RestEntity } from "../class/rest/rest-entity.class.js";

@Injectable()
export class RestService {

  constructor(private http: Http) { 
  }

  newRestEntity(entityName:string){
    let restEntity = new RestEntity(entityName);
    restEntity.http = this.http;
    return restEntity;
  }

}