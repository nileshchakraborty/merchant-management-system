import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class CreatCatalogServiceService {

  constructor(private http: Http) { }

  uploadimage(create){
    let headers = new Headers();
    console.log(create);
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/create/catalogElement',create,{headers:headers})
      .map(res=>res.json());

  }

}
