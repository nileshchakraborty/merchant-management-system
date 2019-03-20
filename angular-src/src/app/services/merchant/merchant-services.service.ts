import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class MerchantServicesService {

  constructor(private http: Http) { }

  getAgentsWaitingForApproval(){
    let headers = new Headers();
    headers.append('Content-type','application-json');

    return this.http.get("http://localhost:3001/merchants/getAgents")
      .map((res) => res.json());
  }


  changeAgentApprovalStatus(agent){
    let headers = new Headers();
    headers.append('Content-type','application-json');
    console.log(agent);
    return this.http.post('http://localhost:3001/merchants/changeAgentStatus',agent/*,{headers:headers}*/)
      .map(res=>res.json());
  }

  getActiveAgents(){
    let headers = new Headers();
    headers.append('Content-type','application-json');

    return this.http.get("http://localhost:3001/merchants/getActiveAgents")
      .map((res) => res.json());
  }

  assignAgent(order){
    let headers = new Headers();
    headers.append('Content-type','application-json');
    return this.http.post("http://localhost:3001/merchants/assignAgents",order,{headers:headers}).
      map(res=>res.json());
  }

}
