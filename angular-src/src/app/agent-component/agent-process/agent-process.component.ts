import { Component, OnInit } from '@angular/core';
var count : number = 0;
var ProgressBar = require('progressbar.js');

@Component({
  selector: 'app-agent-process',
  templateUrl: './agent-process.component.html',
  styleUrls: ['./agent-process.component.css']
})
export class AgentProcessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(count==0){
      (<HTMLInputElement>document.getElementById("dye")).disabled = true;
        (<HTMLInputElement>document.getElementById("machinery")).disabled = true;
        (<HTMLInputElement>document.getElementById("completeorder")).disabled = true;



    }
  }

  status() {
   //var count=0;

   count=count+1;
   if(count==1){
    (<HTMLInputElement>document.getElementById("supplier")).disabled = true;
    var circle = new ProgressBar.Circle('#container',{trailWidth: 4,strokeWidth: 10});
    (<HTMLInputElement>document.getElementById("dye")).disabled = false;

    //move1(circle);
    circle.animate(0.25);
    //circle.animate(1);
   circle.setText("Supplier Phase Done");
   }
   if(count==2){
     //circle.destroy();
     (<HTMLInputElement>document.getElementById("container")).innerHTML="";

     (<HTMLInputElement>document.getElementById("dye")).disabled = true;
     (<HTMLInputElement>document.getElementById("machinery")).disabled = false;

    //document.getElementById("dye").disabled = true;
    //move2();
    var circle = new ProgressBar.Circle('#container',{trailWidth: 4,strokeWidth: 10});
   //circle.animate(0.50,{from: { color: '#eee' },
  //to: { color: '#000' }});
     circle.set(0.5);
    circle.setText("Dying Phase Done");

   }
   if(count==3){
     (<HTMLInputElement>document.getElementById("container")).innerHTML="";

     (<HTMLInputElement>document.getElementById("machinery")).disabled = true;
     (<HTMLInputElement>document.getElementById("completeorder")).disabled = false;

    //document.getElementById("machinery").disabled = true;
   // move3();
   var circle = new ProgressBar.Circle('#container',{trailWidth: 4,strokeWidth: 10});
   circle.set(0.75);
   //circle.animate(0.75,{svgStyle:null});
   circle.setText("Machinery Phase Done");

   }
   if(count==4){
     (<HTMLInputElement>document.getElementById("container")).innerHTML="";

     (<HTMLInputElement>document.getElementById("completeorder")).disabled = true;
    //document.getElementById("machinery").disabled = true;
    //move4();
   var circle = new ProgressBar.Circle('#container',{trailWidth: 4,strokeWidth: 10});
   circle.set(1);

    //circle.animate(1.00,{svgStyle:null});
    circle.setText("Order Completed");
    count=0;
   }

}
status1() {
 //var count=0;

 count=count+1;
 if(count==1){
  (<HTMLInputElement>document.getElementById("supplier")).disabled = true;
  var circle = new ProgressBar.Circle('#container1',{trailWidth: 4,strokeWidth: 10});
  (<HTMLInputElement>document.getElementById("dye")).disabled = false;

  //move1(circle);
  circle.animate(0.25);
  //circle.animate(1);
 circle.setText("Supplier Phase Done");
 }
 if(count==2){
   //circle.destroy();
   (<HTMLInputElement>document.getElementById("container1")).innerHTML="";

   (<HTMLInputElement>document.getElementById("dye")).disabled = true;
   (<HTMLInputElement>document.getElementById("machinery")).disabled = false;

  //document.getElementById("dye").disabled = true;
  //move2();
  var circle = new ProgressBar.Circle('#container1',{trailWidth: 4,strokeWidth: 10});
 //circle.animate(0.50,{from: { color: '#eee' },
//to: { color: '#000' }});
   circle.set(0.5);
  circle.setText("Dying Phase Done");

 }
 if(count==3){
   (<HTMLInputElement>document.getElementById("container1")).innerHTML="";

   (<HTMLInputElement>document.getElementById("machinery")).disabled = true;
   (<HTMLInputElement>document.getElementById("completeorder")).disabled = false;

  //document.getElementById("machinery").disabled = true;
 // move3();
 var circle = new ProgressBar.Circle('#container1',{trailWidth: 4,strokeWidth: 10});
 circle.set(0.75);
 //circle.animate(0.75,{svgStyle:null});
 circle.setText("Machinery Phase Done");

 }
 if(count==4){
   (<HTMLInputElement>document.getElementById("container1")).innerHTML="";

   (<HTMLInputElement>document.getElementById("completeorder")).disabled = true;
  //document.getElementById("machinery").disabled = true;
  //move4();
 var circle = new ProgressBar.Circle('#container1',{trailWidth: 4,strokeWidth: 10});
 circle.set(1);

  //circle.animate(1.00,{svgStyle:null});
  circle.setText("Order Completed");

 }

}

}
