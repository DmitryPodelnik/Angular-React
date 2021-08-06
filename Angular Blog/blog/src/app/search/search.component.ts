import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  searchArticles($event : any) {
    fetch(`https://localhost:44341/api/articles/search?articleName=AS`)
        .then(res => res.json())
        .then(
            data => {

            },
            error => {
                console.log(error);
            }
        )
  }

}
