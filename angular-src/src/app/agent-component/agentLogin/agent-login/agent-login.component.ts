import {Component, OnInit} from '@angular/core';
import {AgentvalidationService} from "../../../services/agent/agentvalidation.service";
import {AuthserviceService} from "../../../services/agent/authservice.service";
import {Router} from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';
import {SaveUserDataService} from "../../../services/miscService/save-user-data.service";


@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css']
})
export class AgentLoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private validateService: AgentvalidationService,
              private authService: AuthserviceService,
              private router: Router,
              private _flashMessagesService: FlashMessagesService,
              private saveUserSession: SaveUserDataService) {
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    const agent = {
      username: this.username,
      password: this.password
    };


    if (!this.validateService.validateLogin(agent)) {
      console.log("");
      this._flashMessagesService.show('Please fill all the fields!', { cssClass: 'alert-success', timeout: 1000 });
      return false;
    }

    this.authService.loginAgent(agent).subscribe(data => {
      if (data.success) {
        console.log("Login Successful!");
        this.saveUserSession.username = agent.username;
        this.router.navigate(['/agent/home']);
      }else{
        this._flashMessagesService.show('Agent Not Registered Yet!', { cssClass: 'alert-success', timeout: 1000 });
      }
    });
  }
}
