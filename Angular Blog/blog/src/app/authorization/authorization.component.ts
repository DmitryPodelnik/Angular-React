import { Component, OnInit } from '@angular/core';

import AuthHelper from "../utils/authHelper"
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [AuthorizationService]
})
export class AuthorizationComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthorizationService) {
    this.username = "";
    this.password = "";
  }

  userCheck($event : any) {

    let user = {
      username: this.username,
      password: this.password
    };

    fetch('https://localhost:44341/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(user)
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                  console.log(this.authService.getLogCondition());
                  console.log(this.username);
                  console.log(this.password);
                    alert("Error authorization");
                    return;
                }
            }).then((data) => {
                AuthHelper.saveAuth(user.username, data.access_token);
                this.authService.toggleLogCondition();
                console.log(this.authService.getLogCondition());
                alert("You have successfully authenticated!");
            }).catch((ex) => {
                alert(ex);
            });
  }

  ngOnInit(): void {
  }

}
