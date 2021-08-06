export class DataService {

  private data: any[]= [];

  constructor() {

  }

  getData(): string[] {

      return this.data;
  }
  addData(item: any){

      this.data.push(item);
  }
}
