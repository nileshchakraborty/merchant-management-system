import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { SliderModule } from 'angular-image-slider';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  public imagesUrl;

  constructor(private router: Router,
              private SliderModule: SliderModule) { }

  ngOnInit() {

    this.imagesUrl = [
      'https://static.contrado.com/resources/images/2017-2/55807/sensation-silk-fabric-online-110251.jpg',
      'https://img.etsystatic.com/il/10e9ce/797187829/il_570xN.797187829_cjpy.jpg?version=0',
      'https://static.contrado.com/resources/images/2015-4/18010/fabric-printing-services-19013_l.jpg',
      //'https://img.etsystatic.com/il/544a69/884357753/il_fullxfull.884357753_2r9p.jpg?version=0',
      // 'https://pixel.nymag.com/imgs/thecut/slideshows/2016/06/india-fasntastique/india-fantastique-07.nocrop.w530.h670.jpg'
    ]}


  /*plainPage(){
    this.router.navigate(['/user/plain']);
  }
  verticalPage(){
    this.router.navigate(['/user/vertical']);
  }
  horizontalPage(){
    this.router.navigate(['/user/horizontal']);
  }
  crossPage(){
    this.router.navigate(['/user/cross']);
  }*/


  viewCatalogue(){
    this.router.navigate(['/user/home/viewcatalog']);
  }



  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
