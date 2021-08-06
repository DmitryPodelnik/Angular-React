import { Component, OnInit } from '@angular/core';

import { Input} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DataService]
})
export class SearchComponent implements OnInit {

  @Input() searchedArticles: any;

  searchString: string = "";

  constructor(private dataService: DataService){}

  addItem(name: string){

    this.dataService.addData(name);
  }

  ngOnInit(){

  }

  searchArticles($event : any) {
    fetch(`https://localhost:44341/api/articles/search?articleName=${this.searchString}`)
        .then(res => res.json())
        .then(
            data => {
              //this.searchArticles = data;
              this.dataService.setData(data);
            },
            error => {
                console.log(error);
            }
        )
  }

}
