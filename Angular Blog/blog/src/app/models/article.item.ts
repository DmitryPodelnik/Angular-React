export class ArticleItem {
  id: number | undefined;
  title: string;
  content: string;
  username: string;
  date: string;
  comments: any;
  tags: any;
  file: any | undefined;

  constructor () {
    this.content = "";
    this.title = "";
    this.username = "";
    this.date = "";
  }
}
