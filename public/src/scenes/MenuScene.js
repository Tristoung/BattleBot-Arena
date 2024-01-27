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
        this.load.image('backButton', 'assets/images/back_arrow.png');
        
        this.load.html('home-menu', 'assets/html_elements/home_menu.html');
        this.load.html('connected-menu', 'assets/html_elements/connected_menu.html');
        this.load.html('join-menu', 'assets/html_elements/join_menu.html');
        this.load.html('create-menu', 'assets/html_elements/create_menu.html');
        this.load.html('options-menu', 'assets/html_elements/options_menu.html');
    }

    create() {
        const background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'backgroundMenu');
        this.logo = this.add.image(this.scale.width / 2, this.scale.height / 3.5, 'logo');

        this.showHomeMenu();
        this.showBackButton();
    }

    showHomeMenu() {
        this.goToMenu("home-menu");

        const connectButton = this.getElementByID('home-connect-button');
        connectButton.addEventListener('click', () => {
            this.username = this.getElementValueByID('home-username-input');
            console.log("Votre pseudo : " + this.username);

            this.showConnectedMenu();
        });
    }

    showConnectedMenu() {
        this.goToMenu("connected-menu");

        const joinButton = this.getElementByID('connected-join-button');
        joinButton.addEventListener('click', () => {
            console.log("Affiche page join");
            this.showJoinMenu();
        });

        const createButton = this.getElementByID('connected-create-button');
        createButton.addEventListener('click', () => {
            console.log("Affiche page create");
            this.showCreateMenu();
        });

        this.backButton.removeAllListeners('pointerdown');
        this.backButton.on('pointerdown', () => {
            this.showHomeMenu();
        });
        
        //const connectedTextElement = document.getElementById('connected-text');
        //connectedTextElement.textContent = "Bienvenue "+this.username+" !";
    }

    showJoinMenu() {
        this.goToMenu("join-menu");

        this.backButton.removeAllListeners('pointerdown');
        this.backButton.on('pointerdown', () => {
            this.showConnectedMenu();
        });
    }

    showCreateMenu() {
        this.goToMenu("create-menu");

        let code_span = this.getElementByID("create-code")
        let button = this.getElementByID("create-copy-button");
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(code_span.textContent);
            button.value = "Copié !";
        });

        this.backButton.removeAllListeners('pointerdown');
        this.backButton.on('pointerdown', () => {
            this.showConnectedMenu();
        });
    }

    showParametersMenu() {
        this.goToMenu("options-menu");
    }

    showBackButton() {
        this.backButton = this.add.image(this.logo.x - this.logo.width / 2, this.currentMenu.y - this.currentMenu.height / 2, 'backButton');
        this.backButton.setOrigin(0, 0);
        this.backButton.setInteractive();

        this.backButton.on('pointerdown', () => {
            console.log('Clickable image clicked!');
            // Add your logic here
        });
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
