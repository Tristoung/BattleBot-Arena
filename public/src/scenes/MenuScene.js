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

        // Récupérer le contenu HTML
        const htmlContent = this.cache.html.get('nameform');

        // Ajouter le contenu au DOM de la scène
        const element = this.add.dom(this.scale.width / 2, this.scale.height / 2).createFromHTML(htmlContent);

        // Vous pouvez accéder aux éléments du DOM ajoutés et définir des événements, par exemple :
        const loginButton = element.getChildByID('loginButton');
        loginButton.addEventListener('click', () => {
            // Gérer le clic sur le bouton de connexion
            const username = document.getElementById('username').value;
            console.log("Votre pseudo : " + username);
            // Faire quelque chose avec les informations d'identification
        });

    }
}
