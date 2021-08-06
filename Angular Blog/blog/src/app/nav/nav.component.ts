import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  constructor(public authService: AuthorizationService) { }

  ngOnInit(): void {
  }

}
