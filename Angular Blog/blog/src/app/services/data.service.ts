import { ArticleItem } from '../models/article.item';

export class DataService {

  private articles: ArticleItem[]= [];
  private isLoaded: boolean = false;

  constructor() {

  }

  getData(): any[] {

      return this.articles;
  }

  getIsLoaded(): boolean {

    return this.isLoaded;
  }

  setIsLoaded(value: boolean): void {
    this.isLoaded = value;
  }

  setData(items: any): void {

    this.articles = items;
    console.dir(`${this.articles}`);
  }

  getAllArticles(): void {
    fetch("https://localhost:44341/api/articles")
        .then(res => res.json())
        .then(
            data => {
              this.articles = data;
              console.log("success");
            },
            error => {
                console.log(error);
            }
        )
  }

  addData(item: any){

      this.articles.push(item);
  }
}
