import { Scene } from '../../phaser.esm.js';

export class MenuScene extends Scene {
    constructor() {
        super({ 
            key: 'MenuScene',
        });
        this.currentMenu = null;
        this.username = null;

        this.inputs = {
            up: 'Z',
            down: 'S',
            left: 'Q',
            right: 'D',
        };
    }

    preload() {
        this.load.image('backgroundMenu', 'assets/images/background.jpg');
        this.load.image('logo', 'assets/images/logo.png');
        
        this.load.html('home-menu', 'assets/html_elements/home_menu.html');
        this.load.html('options-menu', 'assets/html_elements/options_menu.html');
    }

    create() {
        const background = this.add.image(this.scale.width / 2, this.scale.height / 2, 'backgroundMenu');
        this.logo = this.add.image(this.scale.width / 2, this.scale.height / 3.5, 'logo');

        this.showHomeMenu();
    }

    startGame() {
        let data = { 
            username: this.username, 
            modifiedInputs: this.inputs, 
        }
        let gameScene = this.scene.start('GameScene', data);
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
        let copy_button = this.getElementByID("copy-button");
        copy_button.addEventListener('click', () => {
            navigator.clipboard.writeText(code_span.textContent);
            copy_button.value = "Copié !";
        });

        let settings_button = this.getElementByID('settings-icon');
        settings_button.addEventListener('click', () => this.showParametersMenu());
    }

    showParametersMenu() {
        this.goToMenu("options-menu");
        let settings_button = this.getElementByID('back-icon');
        settings_button.addEventListener('click', () => this.showHomeMenu());

        const changeUpButton = this.getElementByID('change-up-button');
        const changeDownButton = this.getElementByID('change-down-button');
        const changeLeftButton = this.getElementByID('change-left-button');
        const changeRightButton = this.getElementByID('change-right-button');

        const updateKey = (key, button) => {
            button.value = '...';
    
            const keyDownHandler = (event) => {
                event.preventDefault();
                button.value = event.key.toUpperCase();
                this.updateInput(key, event.key.toUpperCase());
                document.removeEventListener('keydown', keyDownHandler);
            };
    
            document.addEventListener('keydown', keyDownHandler);
        };
        changeUpButton.addEventListener('click', () => updateKey('up', changeUpButton));
        changeDownButton.addEventListener('click', () => updateKey('down', changeDownButton));
        changeLeftButton.addEventListener('click', () => updateKey('left', changeLeftButton));
        changeRightButton.addEventListener('click', () => updateKey('right', changeRightButton));



        
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

    updateInput(key, value) {
        this.inputs[key] = value;
        console.log(`Touche ${key} mise à jour : ${value}`);
    }
}
