export class DataService {

  private data: any[]= [];

  constructor() {

  }

  getData(): any[] {

      return this.data;
  }

  setData(items: any): void {

    this.data = items;
  }

  addData(item: any){

      this.data.push(item);
  }
}
