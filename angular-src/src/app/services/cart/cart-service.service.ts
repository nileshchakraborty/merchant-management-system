import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";

@Injectable()
export class CartServiceService {

  constructor(private http: Http) { }

  addToCart(cart){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/cart/addToCart',cart,{headers:headers})
      .map(res=>res.json());

  }


  getCartElement(username){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/cart/getCartItem',username,{headers:headers})
      .map(res=>res.json());
  }


  removeCartElement(id){
    console.log(id);
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3001/cart/deleteCartItem',id,{headers:headers})
      .map(res=>res.json());
  }



}
