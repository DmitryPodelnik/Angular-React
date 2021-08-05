import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id: number | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
        switchMap(params => params.getAll('id'))
    )
    .subscribe(data=> this.id = +data);
  }

}
