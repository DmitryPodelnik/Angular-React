import ProductComponent from "./ProductComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ContentComponent from "./ContentComponent";

export default class MainComponent {
    
    createPage() {
        let header = new HeaderComponent("Site Page");
            header.createHeader();
        let content = new ContentComponent();
            content.createContent(); 
        let footer = new FooterComponent("Footer");
            footer.createFooter();   
    }
}