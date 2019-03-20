import { Component, OnInit } from '@angular/core';
import { AgentvalidationService} from "../../../services/agent/agentvalidation.service";
import {AuthserviceService} from "../../../services/agent/authservice.service";
import {Router} from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-agent-registration',
  templateUrl: './agent-registration.component.html',
  styleUrls: ['./agent-registration.component.css']
})
export class AgentRegistrationComponent implements OnInit {

  agency_name:String;
  email:String;
  name: String;
  address: String;
  registration_number: Number;
  username: String;
  password: String;

  constructor(private validateService:AgentvalidationService,
              private authService: AuthserviceService,
              private router:Router,
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const agent = {
      agency_name:this.agency_name,
      email:this.email,
      name: this.name,
      address: this.address,
      registration_number: this.registration_number,
      username: this.username,
      password: this.password,
    };

    //Validating required fields
    if(!this.validateService.validateRegister(agent)){
      //this.flashMessage.show("Please fill all the fields", {cssClass: 'alert-danger', timeout:3000});
      this._flashMessagesService.show('Please fill all the fields!', { cssClass: 'alert-success', timeout: 3000 });
      return false;
    }

    //Validating required email
    if(!this.validateService.validateEmail(agent.email)){
      this._flashMessagesService.show('Enter a valid Email!', { cssClass: 'alert-success', timeout: 3000 });
      return false;
    }

    //Register Agent
    this.authService.registerAgent(agent).subscribe(data => {
      if(data.success){
        console.log("Registered!");
        this._flashMessagesService.show('Registered!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/agent/login']);
      }else{
        console.log("Registration failed");
        this._flashMessagesService.show('Registration Failed!', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/agent/register']);
      }
    });
  }

}
