export default class FooterComponent {
    createFooter() {
        let footer = document.createElement("div");
            footer.id = "footer";
        let p = document.createElement("p");
            p.innerText = ""
        footer.append(p);
        document.body.append(footer);
    }
}