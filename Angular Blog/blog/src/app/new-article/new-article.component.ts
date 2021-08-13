import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
})
export class NewArticleComponent implements OnInit {
  title: string = '';
  content: string = '';
  tags: string = '';
  fileToUpload: File = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  postArticle($event: any): void {
    let article = {
      title: this.title,
      content: this.content,
      tags: this.tags,
    };

    $event.preventDefault();

    if (
      !['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'].includes(
        this.fileToUpload.type
      )
    ) {
      alert('Only images are allowed.');
      return;
    } else if (
      (this.fileToUpload.size < 40000 || this.fileToUpload.size > 625000) &&
      this.fileToUpload.size !== null
    ) {
      alert('File size must be between 40kb and 5mb');
      return;
    } else if (article.title.length < 1 && article.title.length > 32) {
      alert('Enter a correct length of title!');
      return;
    } else if (article.title.length > 150) {
      alert('Enter a correct length of tags!');
      return;
    } else if (article.content.length > 200) {
      alert('Enter a correct length of content!');
      return;
    } else {
      let fData = new FormData();
      if (this.fileToUpload != null) {
        fData.append('image', this.fileToUpload);
      }

      fetch(
        `https://localhost:44341/api/articles/add?title=${this.title}&content=${this.content}&tags=${this.tags}`,
        {
          method: 'POST',
          body: fData,
        }
      ).then(
        (data) => {
          alert('Article has been successfully added!');
          this.router.navigate(['/articles']);
        },
        (error) => {
          alert(error);
          console.log(error);
        }
      );
    }
  }

  handleFileInput(files: FileList): void {
    this.fileToUpload = files.item(0);
  }
}
