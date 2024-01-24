import { Scene } from '../../phaser.esm.js';

export class MenuScene extends Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }

    preload() {
        this.load.image('backgroundMenu', 'assets/images/icon.png');
    }

    create() {
        this.add.image(400, 300, 'backgroundMenu');
        // Ajoutez des boutons ou d'autres éléments de menu ici
    }
}
