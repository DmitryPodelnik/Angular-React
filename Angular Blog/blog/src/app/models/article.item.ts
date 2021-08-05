export class ArticleItem {
  id: number | undefined;
  title: string;
  content: string;
  file: any | undefined;

  constructor () {
    this.content = "";
    this.title = "";
  }
}
