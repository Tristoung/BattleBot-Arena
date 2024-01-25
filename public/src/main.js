// main.js
import { Game, AUTO } from '../phaser.esm.js';
import { MenuScene } from './scenes/MenuScene.js';
import { GameScene } from './scenes/GameScene.js';

class MyGame {
    constructor() {
        const config = {
            type: AUTO,
            width: 1200,
            height: 800,
            dom: {
                createContainer: true,
            },
            scene: [MenuScene, GameScene],
            parent: document,
        };

        this.game = new Game(config);

        // Démarrage avec la scène du menu
        this.game.scene.start('MenuScene');
    }
}

const myGame = new MyGame();
