import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ArticleItem } from '../models/article.item';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: number | undefined;
  article: ArticleItem | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
        switchMap(params => params.getAll('id'))
    )
    .subscribe(data => this.id = +data);

    fetch(`https://localhost:44341/api/articles/${this.id}`)
        .then(res => res.json())
        .then(
            data => {
              console.log('success fetch id article');
              this.article = data;
            },
            error => {
              console.log(error);
            }
        )
  }

}
