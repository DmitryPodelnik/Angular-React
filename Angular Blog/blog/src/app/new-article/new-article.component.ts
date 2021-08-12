import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { uploadFile } from '../functions/upload-file'

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  title: string = "";
  content: string = "";
  tags: string = "";
  image: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.image.addEventListener("change", () => {
      uploadFile(this.image.files[0]);
  });
  }

  postArticle($event: any): void {

    let article = {
      title: this.title,
      content: this.content,
      tags: this.tags,
      image: this.image,
    };

    $event.preventDefault();

        if (article.title.length < 1 && article.title.length > 32) {
            alert("Enter a correct length of title!");
            return;
        }
        else if (article.title.length > 150) {
            alert("Enter a correct length of tags!");
            return;
        }
        else if (article.content.length > 1000) {
            alert("Enter a correct length of content!");
            return;
        } else {

        //let temp = (<HTMLInputElement>document.getElementById("image"));

        let fData = new FormData();
        if (this.image.files != null) {
            fData.append("image", this.image.files[0]); // добавляем файл в объект FormData()
        }

        fetch(`https://localhost:44341/api/articles/add?title=${this.title}&content=${this.content}&tags=${this.tags}`, {
            method: "GET",
            body: fData
        })
        .then(res => res.json())
        .then(
            data => {
                alert("Article has been successfully added!");
                this.router.navigate(['/articles']);
            },
            error => {
                alert(error);
                console.log(error);
            })
        }

    // fetch(`https://localhost:44341/api/articles/add?title=${this.title}&content=${this.content}&tags=${this.tags}`)
    //     .then(
    //         data => {
    //           console.log('success');
    //           this.router.navigate(['/articles']);
    //         },
    //         error => {
    //           console.log(error);
    //         }
    //     )

  }
}
