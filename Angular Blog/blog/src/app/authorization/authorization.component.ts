import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  username: string;
  password: string;

  constructor() {
    this.username = "";
    this.password = "";
  }

  userCheck() {

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
                    alert("Error authorization");
                    return;
                }
            }).then((data) => {
                AuthHelper.saveAuth(user.username, data.access_token);
                this.context.toggleLogging();
                this.setUserId();
                alert("You have successfully authenticated!");
            }).catch((ex) => {
                alert(ex);
            });
  }

  ngOnInit(): void {
  }

}
