import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ArticleItem } from '../models/article.item';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  id: number | undefined;
  article: ArticleItem | undefined;

  constructor(
    private route: ActivatedRoute,
    public authService: AuthorizationService,
    private router: Router)
    { }

  ngOnInit(): void {
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

    // fetch(`https://localhost:44341/api/articles/edit/${this.id}`).then(
    //   (data) => {
    //     console.log('article was edited');
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  saveArticle($event: any): void {

  }

}
