import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {



  clothtypes = [];
  selectedItem: Object = {};
  clothCost:String;
  constructor() {

  }

  ngOnInit() {
    this.clothtypes.push(new clothTypes("SILK",
      "$25"));
    this.clothtypes.push(new clothTypes("COTTON",
      "$15"));
    this.clothtypes.push(new clothTypes("LINEN",
      "$10"));
    this.clothtypes.push(new clothTypes("WOOL",
      "$18"));
    this.clothtypes.push(new clothTypes("SYNTHETIC FIBERS",
      "$20"));
    this.clothtypes.push(new clothTypes("RAYON",
      "$15"));
  }
}


class clothTypes {
  constructor(public cloth: String,
              public  cost: String) {

  }
}



