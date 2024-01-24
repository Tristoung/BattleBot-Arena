import { Scene } from '../../phaser.esm.js';

export class GameScene extends Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        this.load.image('backgroundGame', 'assets/images/icon.png');
        // Chargez d'autres ressources de jeu ici
    }

    create() {
        this.add.image(400, 300, 'backgroundGame');
        // Initialisation du jeu
    }

    update() {
        // Mise à jour du jeu
    }
}
