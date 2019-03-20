import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openDetails(){
    // this.router.navigate(['/agent/profile']);
  }

}
