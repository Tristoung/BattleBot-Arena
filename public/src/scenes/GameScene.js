import { Scene } from '../../phaser.esm.js';

export class GameScene extends Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('backgroundGame', 'assets/images/background.jpg');
        // Chargez d'autres ressources de jeu ici
    }

    create() {
        this.add.image(600, 400, 'backgroundGame');
        // Initialisation du jeu
    }

    update() {
        // Mise à jour du jeu
    }
}
