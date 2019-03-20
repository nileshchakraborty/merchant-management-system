import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MerchantServicesService} from "../../services/merchant/merchant-services.service";

@Component({
  selector: 'app-agent-histogram',
  templateUrl: './agent-histogram.component.html',
  styleUrls: ['./agent-histogram.component.css']
})
export class AgentHistogramComponent implements OnInit {
  agents = [];
  acceptOrds = [];
  declineOrds = [];
  receivedOrds = [];
  deliveredOrds = [];
  chart = [];
  constructor( private router:Router,
               private getActiveAgents: MerchantServicesService) {}

  ngOnInit() {

    this.getActiveAgents.getActiveAgents().subscribe(
      data => {
        if (data.success) {
          console.log(data);
          data.agent.forEach(i=>{
            if(i.name != undefined)
              console.log(i.name);
            this.agents.push(i.name);
            this.acceptOrds.push(i.orders.acceptOrders);
            this.declineOrds.push(i.orders.declineOrders);
            this.receivedOrds.push(i.orders.receivedOrders);
            this.deliveredOrds.push(i.orders.deliveredOrders);
            console.log(this.agents);
            console.log(this.acceptOrds);
            console.log(this.declineOrds);
            console.log(this.receivedOrds);
            console.log(this.deliveredOrds);

          });
        }
      });

  }
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = this.agents;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: this.receivedOrds, label: 'Orders Received'},
    {data: this.acceptOrds, label: 'Orders accepted'},
    {data: this.declineOrds, label: 'Orders Declined' },
    {data: this.deliveredOrds, label: 'Orders Delivered'}

  ];

  public barChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  /*public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }*/

}

