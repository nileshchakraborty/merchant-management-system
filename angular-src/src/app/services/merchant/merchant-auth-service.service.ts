import { Injectable } from '@angular/core';

@Injectable()
export class MerchantAuthServiceService {

  constructor() { }


  checkMerchantLogin(merchant){
    if(merchant.username == 'admin' && merchant.password == 'admin'){
      return true;
    }
  }

}
