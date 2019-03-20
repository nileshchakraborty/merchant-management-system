import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class PlaceOrderService {

  constructor(private http: Http) { }


  placeOrders(orderDetails){
    console.log(orderDetails);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3001/endUsers/place_order',orderDetails,{headers:headers})
      .map(res=>res.json());
  }

  getAllOrdersForAgents(agent){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


  }


  getAllOrdersForCustomer(customer){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


  }


  getAllOrdersForMerchants(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');


  }

}
