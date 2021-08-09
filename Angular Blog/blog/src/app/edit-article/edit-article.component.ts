import { Component, OnInit } from '@angular/core';

import { ArticleItem } from '../models/article.item';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article: ArticleItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  saveArticle($event: any): void {

  }

}
