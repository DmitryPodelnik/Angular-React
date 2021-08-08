import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ArticleItem } from '../models/article.item';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  id: number | undefined;
  article: ArticleItem | undefined;

  constructor(
    private route: ActivatedRoute,
    public authService: AuthorizationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(switchMap((params) => params.getAll('id')))
      .subscribe((data) => (this.id = +data));

    fetch(`https://localhost:44341/api/articles/${this.id}`)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log('success fetch id article');
          this.article = data;
        },
        (error) => {
          console.log(error);
        }
      );
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
    } else {
      this.router.navigate([`/article/${id}`]);
    }
  }
}
