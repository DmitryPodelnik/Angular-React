import ProductComponent from "./ProductComponent";

import firstLogo from "./assets/1.png";
import secondLogo from "./assets/2.jpg";
import thirdLogo from "./assets/3.png";
import fourthLogo from "./assets/4.png";
import fifthLogo from "./assets/5.jpg";
import sixthLogo from "./assets/6.jpg";
import seventhLogo from "./assets/7.jpg";

export default class ContentComponent {
    constructor() {
        this._products = [
            new ProductComponent("First", 10, 1, firstLogo),
            new ProductComponent("Second", 12, 2, secondLogo),
            new ProductComponent("Third", 14, 3, thirdLogo),
            new ProductComponent("Fourth", 16, 2, fourthLogo),
            new ProductComponent("Fifth", 20, 3, fifthLogo),
            new ProductComponent("Sixths", 23, 5, sixthLogo),
            new ProductComponent("Sevenths", 25, 4, seventhLogo)
        ];
    }

    get products() {
        return this._products
    }

    createContent() {
        let contentMesh = document.createElement("div");
            contentMesh.id = "contentMesh";

        for (let item of this._products) {
            contentMesh.append(item.createProduct());
        }

        document.body.append(contentMesh);
    }
}