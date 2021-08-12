import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ArticleItem } from '../models/article.item';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
})
export class EditArticleComponent implements OnInit {
  id: number | undefined;
  article: ArticleItem | undefined;
  fileToUpload: File = null;

  constructor(
    private route: ActivatedRoute,
    public authService: AuthorizationService,
    private router: Router
  ) {}

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
  }

  saveArticle($event: any): void {
    let fData = new FormData();
    if (this.fileToUpload != null) {
        fData.append("image", this.fileToUpload);
    }

    if (this.article !== undefined) {
      fetch(`https://localhost:44341/api/articles/edit?Id=${this.article.id}&Title=${this.article.title}
           &Content=${this.article.content}&Date=${this.article.date}&Username=${this.article.username}
           &Tags=${this.article.tags}`, {
            method: "POST",
            body: fData
        })
        .then(
          (data) => {
            alert("Article has been successfully edited!");
            console.log('article was edited');
          },
          (error) => {
            alert(error);
            console.log(error);
          }
        )
        .then(() => {
          this.router.navigate([`/articles`]);
        });
    }
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }
}
