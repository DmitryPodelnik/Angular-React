import { Component, DoCheck, OnInit } from '@angular/core';
import { ArticleItem } from '../models/article.item';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements DoCheck, OnInit {

  articles: ArticleItem[] | undefined;

  constructor(public dataService: DataService) { }

  ngDoCheck() {
    this.articles = this.dataService.getData();
    if(this.articles.length != 0) {
      this.dataService.setIsLoaded(true);
    }
  }

  ngOnInit() {
    this.dataService.getAllArticles();
  }

}
