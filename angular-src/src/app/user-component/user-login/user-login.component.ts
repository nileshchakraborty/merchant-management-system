import { Component, OnInit } from '@angular/core';
import { UserauthserviceService } from '../../services/users/userauthservice.service';
import { UserValidateService } from '../../services/users/user-validate.service';
import { Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {SaveUserDataService} from "../../services/miscService/save-user-data.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username:String;
  password:String;


  constructor(private authService : UserauthserviceService,
              private validateService : UserValidateService,
              private router : Router,
              private _flashMessagesService: FlashMessagesService,
              private userDataService: SaveUserDataService) {
  }

  ngOnInit() {
  }

  onSubmitUserLogin(){
    const user = {
      username: this.username,
      password: this.password
    };


    if(!this.validateService.validateUserLogin(user)){
      //this.flashMessage.show("Please fill all the fields", {cssClass: 'alert-danger', timeout:3000});
      console.log("Please fill all the fields");
      this._flashMessagesService.show('Please fill all the fields!', { cssClass: 'alert-success', timeout: 3000 });
      return false;
    }

    this.authService.loginUser(user).subscribe(data => {
      if(data.success){
        console.log("Login Successful!");
        this.userDataService.username = user.username;
        this.router.navigate(['/user/home']);
      }else{
        console.log("Login has failed");
        this._flashMessagesService.show('Login has failed!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']);
      }
    });
  }

}
