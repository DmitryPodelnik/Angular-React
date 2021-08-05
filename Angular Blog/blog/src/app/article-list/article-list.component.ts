import { Component, OnInit } from '@angular/core';
import { ArticleItem } from '../models/article.item';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: ArticleItem[] | undefined;

  constructor() { }

  ngOnInit() {
    fetch("https://localhost:44341/api/articles")
        .then(res => res.json())
        .then(
            data => {
             this.articles = data;
            },
            error => {
                console.log(error);
            }
        )
  }

}
