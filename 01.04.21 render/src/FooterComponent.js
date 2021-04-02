export default class FooterComponent {
    constructor(footer) {
        this._footer = footer;
    }
    createFooter() {
        let footer = document.createElement("div");
            footer.id = "footer";
            footer.style.backgroundColor = "orange";
            footer.style.textAlign = "center";
        let p = document.createElement("p");
            p.innerText = this._footer;
        footer.append(p);
        document.body.append(footer);
    }
} 