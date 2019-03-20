import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class GetOrdersService {

  constructor(private http: Http) { }

  getOrdersForMerchant(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3001/merchants/orderReceivedForMerchant'/*,{headers:headers}*/)
      .map(res=>res.json());
  }

}
