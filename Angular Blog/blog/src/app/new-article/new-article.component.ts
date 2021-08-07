import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  title: string = "";
  content: string = "";
  tags: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  postArticle($event: any): void {

    let article = {
      title: this.title,
      content: this.content,
      tags: this.tags,
    };

    fetch(`https://localhost:44341/api/articles/add?title=${this.title}&content=${this.content}&tags=${this.tags}`)
        .then(
            data => {
              console.log('success');
              this.router.navigate(['/articles']);
            },
            error => {
              console.log(error);
            }
        )

  }
}
