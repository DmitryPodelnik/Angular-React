export default class HeaderComponent {
    createHeader() {
        let header = document.createElement("h1");
            header.id = "header";
            header.innerText = "Header";
        document.body.append(header);
    }
}