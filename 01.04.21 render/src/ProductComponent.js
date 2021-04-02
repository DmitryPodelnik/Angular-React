export default class ProductComponent {
    constructor(name, price, amount, image) {
        this._name = name;
        this._price = price;
        this._amount = amount;
        this._image = image;
    }
    createProduct() { 
        let p = document.createElement("p");
            p.innerText = `${this.name}, ${this.price}, ${this.amount}`;
        let mainDiv = document.createElement("div");
            mainDiv.append(p);
        
    }

    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
    get amount() {
        return this._amount;
    }
    get image() {
        return this._image;
    }
}