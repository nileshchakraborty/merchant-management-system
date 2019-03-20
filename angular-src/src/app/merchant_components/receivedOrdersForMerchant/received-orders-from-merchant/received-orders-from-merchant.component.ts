import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GetOrdersService} from "../../../services/merchant/get-orders.service";
import {MerchantServicesService} from "../../../services/merchant/merchant-services.service";



@Component({
  selector: 'app-received-orders-from-merchant',
  templateUrl: './received-orders-from-merchant.component.html',
  styleUrls: ['./received-orders-from-merchant.component.css']
})
export class ReceivedOrdersFromMerchantComponent implements OnInit {

  orders = [];
  agents = [];

  constructor(private router:Router,
              private getAllOrders:GetOrdersService,
              private getActiveAgents: MerchantServicesService) { }

  ngOnInit() {
    console.log("Here");
    this.getAllOrders.getOrdersForMerchant().subscribe(
      data => {
        if (data.success) {
        data.orders.forEach(i=>{
            console.log(i);
            if(i._id != undefined)
            // console.log(i.name);
              this.orders.push(i._id+"\n"+
                i.catalog+"\n"+
                i.cost
            );
          });
        }
      });

    this.getActiveAgents.getActiveAgents().subscribe(
      data => {
        if (data.success) {
          console.log(data);
          data.agent.forEach(i=>{
            if(i.name != undefined)
              console.log(i.name);
            this.agents.push(i.name);
          });
        }
      });

  }

  assignAgent(orderId,agentName){
    console.log(agentName);
    const index: number = this.orders.indexOf(orderId);
    const order = {
      id: orderId,
      agentName: agentName
    };
    this.getActiveAgents.assignAgent(order).subscribe(data=>{
      if (data.success){
        console.log("Order Assigned to agent");
        this.orders.splice(index,1)
      } else{
        console.log("Could Not Assign Order");
      }
    })
 }



}

class Orders{
  constructor(private imageUrl:String,
              private desc: String,
              //private cost: String,
              private title: String){

  }


}
