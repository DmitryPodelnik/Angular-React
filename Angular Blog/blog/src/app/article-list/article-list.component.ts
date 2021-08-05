import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArticleItem } from '../models/article.item';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: ArticleItem[] | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
        switchMap(params => params.getAll('id'))
    )
    .subscribe(data=> this.id = +data);
  }

}
