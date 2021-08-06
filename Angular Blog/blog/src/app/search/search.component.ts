import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  searchString: string = "";

  constructor(private dataService: DataService, private router: Router){}

  addItem(name: string){

    this.dataService.addData(name);
  }

  ngOnInit(){

  }

  searchArticles($event : any) {
    this.router.navigate(['/articles']);
    this.dataService.setIsLoaded(false);

    if (this.searchString === "") {
      fetch(`https://localhost:44341/api/articles`)
        .then(res => res.json())
        .then(
            data => {
              this.dataService.setData(data);
              console.log("success search articles");
            },
            error => {
                console.log(error);
            }
        )
    } else {
      fetch(`https://localhost:44341/api/articles/search?articleName=${this.searchString}`)
        .then(res => res.json())
        .then(
            data => {
              this.dataService.setData(data);
              console.log("success search articles");
            },
            error => {
                console.log(error);
            }
        )
    }
  }

}
