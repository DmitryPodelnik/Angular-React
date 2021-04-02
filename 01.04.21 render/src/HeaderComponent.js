export default class HeaderComponent {
    constructor(header) {
        this._header = header;
    }
    createHeader() {
        let header = document.createElement("h1");
            header.id = "header";
            header.innerText = this._header;
            header.style.backgroundColor = "orange";
            header.style.textAlign = "center";
        document.body.append(header);
    }

    get header() {
        return this._header;
    }
}