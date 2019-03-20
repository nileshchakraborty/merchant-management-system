import { Component, OnInit } from '@angular/core';
import { UserauthserviceService } from '../../services/users/userauthservice.service';
import { UserValidateService } from '../../services/users/user-validate.service';
import { Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  name:String;
  email:String;
  username: String;
  password: String;


  constructor(private authService : UserauthserviceService,
              private validateService : UserValidateService,
              private router : Router,
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitRegisterUser(){
    const user = {
      name:this.name,
      email:this.email,
      username: this.username,
      password: this.password
    };

    //Validating required fields
    if(!this.validateService.validateUserRegister(user)){
      //this.flashMessage.show("Please fill all the fields", {cssClass: 'alert-danger', timeout:3000});
      console.log("Please fill all the fields");
      this._flashMessagesService.show('Please fill all the fields!', { cssClass: 'alert-success', timeout: 3000 });
      return false;
    }

    //Validating required email
    if(!this.validateService.validateUserEmail(user.email)){
      console.log("Please enter a valid email");// {cssClass: 'alert-danger', timeout:3000}
      this._flashMessagesService.show('Please enter a valid email!', { cssClass: 'alert-success', timeout: 3000 });
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        console.log("Registered!");
        this.router.navigate(['/user/login']);
      }else{
        this._flashMessagesService.show('Registration Failed!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/user/register']);
      }
    });
  }


}
