import { Game, AUTO, Scale } from '../phaser.esm.js';
import { MenuScene } from './scenes/MenuScene.js';
import { GameScene } from './scenes/GameScene.js';

class MyGame {
    constructor() {
        this.width = 1920;
        this.height = 1080;
        const config = {
            type: AUTO,
            width: this.width,
            height: this.height,
            dom: {
                createContainer: true, // permet d'ajouter un élément html dans le canvas
            },
            scene: [MenuScene, GameScene],
            parent: document,
            scale: {
                mode: Scale.ENVELOP,
                autoCenter: Scale.CENTER_BOTH,
            },
        };

        this.game = new Game(config);

        this.game.scene.start('MenuScene');
    }
}

const myGame = new MyGame();
