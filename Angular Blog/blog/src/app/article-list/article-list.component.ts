import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleItem } from '../models/article.item';
import { DataService } from '../services/data.service';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements DoCheck, OnInit {
  id: number | undefined;
  articles: ArticleItem[] | undefined;

  constructor(
    public dataService: DataService,
    public authService: AuthorizationService,
    private router: Router
  ) {}

  ngDoCheck() {
    this.articles = this.dataService.getData();
    if (this.articles.length != 0) {
      this.dataService.setIsLoaded(true);
    }
  }

  ngOnInit() {
    this.dataService.getAllArticles();
  }

  deleteArticle(id: number): void {
    if (confirm('Are you sure to delete this article?')) {
      fetch(`https://localhost:44341/api/articles/delete/${id}`).then(
        (data) => {
          console.log('article was deleted');
          this.router.navigate(['/activityfeed']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  editArticle(id: number): void {
      fetch(`https://localhost:44341/api/articles/edit/${id}`).then(
        (data) => {
          console.log('article was edited');

        },
        (error) => {
          console.log(error);
        }
      );
    }

}
