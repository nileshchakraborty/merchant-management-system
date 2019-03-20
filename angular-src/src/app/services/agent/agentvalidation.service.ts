import { Injectable } from '@angular/core';

@Injectable()
export class AgentvalidationService {

  constructor() { }

  validateRegister(agent){
    if(agent.agency_name == undefined ||
      agent.email == undefined ||
      agent.name == undefined ||
      agent.address == undefined ||
      agent.registration_number == undefined ||
      agent.username == undefined ||
      agent.password == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateLogin(agent){
    if(agent.username == undefined ||
      agent.password == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
