import { Scene } from '../../phaser.esm.js';

export class MenuScene extends Scene {
    constructor() {
        super({ 
            key: 'MenuScene',
         });
    }

    preload() {
        this.load.image('backgroundMenu', 'assets/images/background.jpg');
        this.load.html('nameform', 'assets/html_elements/home_menu.html');

    }

    create() {
        const background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'backgroundMenu');

        const htmlContent = this.cache.html.get('nameform');

        const element = this.add.dom(this.scale.width / 2, this.scale.height / 2).createFromHTML(htmlContent);

        const loginButton = element.getChildByID('loginButton');
        loginButton.addEventListener('click', () => {
            const username = document.getElementById('username').value;
            console.log("Votre pseudo : " + username);
        });

    }
}
