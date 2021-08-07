import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

import AuthHelper from "../utils/authHelper"

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthorizationService) { }

  ngOnInit(): void {
  }

  logOut($event: any) {
    AuthHelper.clearAuth();
    this.authService.toggleLogCondition();
    console.log(this.authService.getLogCondition());
    alert("You have successfully logged out!");
  }

}
