import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class GetCatalogsService {

  constructor(private http: Http) { }

  getCatalog(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3001/create/getCatalogElements',{headers:headers})
      .map(res=>res.json());

  }
}
