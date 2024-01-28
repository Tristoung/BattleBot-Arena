import { Scene } from '../../phaser.esm.js';

export class MenuScene extends Scene {
    constructor() {
        super({ 
            key: 'MenuScene',
        });
        this.currentMenu = null;
        this.username = null;
    }

    preload() {
        this.load.image('backgroundMenu', 'assets/images/background.jpg');
        this.load.image('logo', 'assets/images/logo.png');
        
        this.load.html('home-menu', 'assets/html_elements/home_menu.html');
    }

    create() {
        const background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'backgroundMenu');
        this.logo = this.add.image(this.scale.width / 2, this.scale.height / 3.5, 'logo');

        this.showHomeMenu();
    }

    startGame() {
        let gameScene = this.scene.start('GameScene');
    }

    showHomeMenu() {
        this.goToMenu("home-menu");

        const playButton = this.getElementByID('home-play-button');
        playButton.addEventListener('click', () => {
            this.username = this.getElementValueByID('home-username-input');
            console.log("Pseudo entré : " + this.username);
            this.startGame();
        });

        let code_span = this.getElementByID("code")
        let button = this.getElementByID("copy-button");
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(code_span.textContent);
            button.value = "Copié !";
        });
    }

    showParametersMenu() {
        this.goToMenu("options-menu");
    }

    goToMenu(menu) {
        if(this.currentMenu)
            this.currentMenu.destroy();
        const htmlContent = this.cache.html.get(menu);
        this.currentMenu = this.add.dom(this.scale.width / 2, this.scale.height / 2).createFromHTML(htmlContent);
    }

    getElementByID(elementID) {
        return this.currentMenu.getChildByID(elementID);
    }

    getElementValueByID(elementID) {
        return this.getElementByID(elementID).value;
    }
}
