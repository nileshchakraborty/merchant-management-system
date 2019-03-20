import { Component, OnInit } from '@angular/core';
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";

@Component({
  selector: 'app-customize-catalog',
  templateUrl: './customize-catalog.component.html',
  styleUrls: ['./customize-catalog.component.css']
})
export class CustomizeCatalogComponent implements OnInit {

  constructor(private userDataService : SaveUserDataService) { }

  ngOnInit() {
    if(this.userDataService.username != null){


    }else{

    }
  }

}
