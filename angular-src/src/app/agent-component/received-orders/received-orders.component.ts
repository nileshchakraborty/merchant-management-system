import { Component, OnInit } from '@angular/core';
import {GetOrdersService} from "../../services/merchant/get-orders.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-received-orders',
  templateUrl: './received-orders.component.html',
  styleUrls: ['./received-orders.component.css']
})
export class ReceivedOrdersComponent implements OnInit {

  orders = [];

  constructor(private router:Router,
              private getAllOrders:GetOrdersService) { }

  ngOnInit() {
    this.orders.push(new Orders("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSp7ZnUCN0XP9Rr-twN6FKvMe4yyGFDdJtH-Bp-8TXomkDDDP",
      "Silk",
      "50$",
      "50 inches"))
    this.orders.push(new Orders("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSp7ZnUCN0XP9Rr-twN6FKvMe4yyGFDdJtH-Bp-8TXomkDDDP",
      "Silk",
      "100$",
      "100 inches"))
    this.orders.push(new Orders("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSp7ZnUCN0XP9Rr-twN6FKvMe4yyGFDdJtH-Bp-8TXomkDDDP",
      "Silk",
      "75$",
      "60 inches"))
    this.orders.push(new Orders("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSp7ZnUCN0XP9Rr-twN6FKvMe4yyGFDdJtH-Bp-8TXomkDDDP",
      "Silk",
      "150$",
      "120 inches"))
    this.orders.push(new Orders("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSp7ZnUCN0XP9Rr-twN6FKvMe4yyGFDdJtH-Bp-8TXomkDDDP",
      "Silk",
      "200$",
      "250 inches"))
    this.orders.push(new Orders("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSp7ZnUCN0XP9Rr-twN6FKvMe4yyGFDdJtH-Bp-8TXomkDDDP",
      "Silk",
      "400$",
      "450 inches"))
    this.orders.push(new Orders("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSp7ZnUCN0XP9Rr-twN6FKvMe4yyGFDdJtH-Bp-8TXomkDDDP",
      "Silk",
      "500$",
      "650 inches"))

  }

}

class Orders{
  constructor(private imageUrl:String,
              private desc: String,
              private cost: String,
              private length: String){

  }
}
