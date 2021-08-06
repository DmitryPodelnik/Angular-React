export class ArticleItem {
  id: number | undefined;
  title: string;
  content: string;
  author: string;
  postDate: string;
  commentsCount: number;
  file: any | undefined;

  constructor () {
    this.content = "";
    this.title = "";
    this.author = "";
    this.postDate = "";
    this.commentsCount = 0;
  }
}
