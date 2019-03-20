import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {GetCatalogsService} from "../../services/catalogService/get-catalogs.service";
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";
import {PlaceOrderService} from "../../services/placeorders/place-order.service";
import {CartServiceService} from "../../services/cart/cart-service.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-view-catalog',
  templateUrl: './view-catalog.component.html',
  styleUrls: ['./view-catalog.component.css']
})
export class ViewCatalogComponent implements OnInit {


  catalogList = [];
  // cost: String;
  userObject;

  // to place order
  catalogname: String;
  finalcost: number;
  cloth_length : any=[];
  unitLength: number;

  cost = [];

  clothtypes = [];
  selectedItem: Object = {};

  clothType: String;


  constructor(private catalogService:GetCatalogsService,
              private _flashMessagesService: FlashMessagesService,
              private userDataService: SaveUserDataService,
              private placeOrderService: PlaceOrderService,
              private cartService : CartServiceService,
              private router: Router) {

  }

  ngOnInit() {


    this.clothtypes.push(new clothTypes(0,"SILK",
      "$",25));
    this.clothtypes.push(new clothTypes(1,"COTTON",
      "$",15));
    this.clothtypes.push(new clothTypes(2,"LINEN",
      "$",10));
    this.clothtypes.push(new clothTypes(3,"WOOL",
      "$",18));
    this.clothtypes.push(new clothTypes(4,"SYNTHETIC FIBERS",
      "$",20));
    this.clothtypes.push(new clothTypes(5,"RAYON",
      "$",15));

    if(this.userDataService.username != null){
    this.userObject = this.userDataService.username;
    this.catalogService.getCatalog().subscribe(data=>
    {
      console.log(data.success);
      if(data.success){
        data.catalogs.forEach(
          i=>{
            const imageUrl = "../../../assets/"+i.imageURL;
            this.catalogList.push(new Catalog(imageUrl,i.title,i.desc,i.unitLengthCost));
          });
        console.log(this.catalogList);
      }
    });
    }else{
      this.router.navigate(['/user/login']);
    }
  }


  updatePrice(val:any,j){
    console.log(val);
    for (let i = 0; i < this.clothtypes.length; i++) {
      if (this.clothtypes[i].cloth == val){
        console.log(this.clothtypes[i]);
        this.cost[j] = this.clothtypes[i].cost;
      }
    }
  }


  addToCart(catalog,index,clothType){
    console.log(this.cloth_length[index]);
    this.unitLength = catalog.unitLengthCost;
    const clothCost = Number(clothType);
    console.log("ClothCost "+clothCost);
    console.log("UnitLength + ClothCost  " +Number(this.unitLength)+Number(clothCost));
    const totalCost = Number(this.cloth_length[index])*(Number(this.unitLength)+Number(clothCost));

    console.log("Total Cost : "+totalCost);

    const cartItem = {
      username : this.userDataService.username,
      catalogName : catalog.title,
      lengthEntered: this.cloth_length[index],
      catalogImage: catalog.imageURL,
      clothName: "Silk",
      totalCost : totalCost
    };
    this.cartService.addToCart(cartItem).subscribe(data=>{
      if (data.success){
        this._flashMessagesService.show('Item Added to Cart!', { cssClass: 'alert-success', timeout: 3000 });
      }else{
        console.log(data);
      }
    })

  }

}

class Catalog {
  constructor(public imageURL: String,
              public title: String,
              public desc: String,
              public unitLengthCost: String) {
  }

}


class clothTypes {
  constructor(
              public id: Number,
              public cloth: String,
              public currency: String,
              public  cost: Number) {

  }
}

