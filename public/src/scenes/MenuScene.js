import { Scene } from '../../phaser.esm.js';

export class MenuScene extends Scene {
    constructor() {
        super({ 
            key: 'MenuScene',
        });
    }

    preload() {
        this.load.image('backgroundMenu', 'assets/images/background.jpg');
        this.load.image('logo', 'assets/images/logo.png');
        
        this.load.html('nameform', 'assets/html_elements/home_menu.html');
        this.load.html('connectedform', 'assets/html_elements/connected_menu.html');
    }

    create() {
        const background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'backgroundMenu');
        const logo = this.add.image(this.scale.width / 2, this.scale.height / 3, 'logo');

        this.showNameForm();

        const loginButton = this.getElementByID('loginButton');
        loginButton.addEventListener('click', () => {
            const username = this.getElementValueByID('username');
            console.log("Votre pseudo : " + username);

            this.showConnectedForm();
        });
    }

    showNameForm() {
        const htmlContent = this.cache.html.get('nameform');
        this.currentForm = this.add.dom(this.scale.width / 2, this.scale.height / 1.5).createFromHTML(htmlContent);
    }

    showConnectedForm() {
        this.currentForm.destroy();

        const connectedHtmlContent = this.cache.html.get('connectedform');
        this.currentForm = this.add.dom(this.scale.width / 2, this.scale.height / 1.5).createFromHTML(connectedHtmlContent);
    }

    getElementByID(elementID) {
        return this.currentForm.getChildByID(elementID);
    }

    getElementValueByID(elementID) {
        return this.getElementByID(elementID).value;
    }
}
