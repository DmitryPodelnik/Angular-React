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

  items: string[] = [];
  
  constructor(private dataService: DataService){}

  addItem(name: string){

    this.dataService.addData(name);
  }
  ngOnInit(){
    this.items = this.dataService.getData();
  }

  searchArticles($event : any) {
    fetch(`https://localhost:44341/api/articles/search?articleName=AS`)
        .then(res => res.json())
        .then(
            data => {
              this.searchArticles = data;
            },
            error => {
                console.log(error);
            }
        )
  }

}
