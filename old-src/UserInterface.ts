export class UserInterface {
    private styles: any;
    start() {
        console.log("Loaded");
    }
    
    alert(message: string) {
        let el = document.createElement("div");
        el.classList.add('notification', 'alert');
        let txt = document.createTextNode(message);
        el.appendChild(txt);
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(el);
        this.addCss(".notification { color:pink; }");
        setTimeout(() => {
            this.removeCss();
        }, 3000);
    }
    
    addCss(styles: string) {
        let styleTag = document.createElement('style');
        styleTag.innerText = styles;
        let body = document.getElementsByTagName('body')[0];
        body.appendChild(styleTag);
        this.styles = styleTag;
    }
    
    removeCss() {
        let body = document.getElementsByTagName('body')[0];
        body.removeChild(this.styles);
    }
}