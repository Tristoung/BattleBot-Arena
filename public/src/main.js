// main.js
import { Game, AUTO, Scale } from '../phaser.esm.js';
import { MenuScene } from './scenes/MenuScene.js';
import { GameScene } from './scenes/GameScene.js';

class MyGame {
    constructor() {
        const config = {
            type: AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            dom: {
                createContainer: true,
            },
            scene: [MenuScene, GameScene],
            parent: document,
            scale: {
                mode: Scale.ENVELOP
            },
        };

        this.game = new Game(config);

        // Démarrage avec la scène du menu
        this.game.scene.start('MenuScene');

        // Changer la taille de l'écran responsivement
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }
    resize() {
        // const canvasElement = document.querySelector('canvas'); // Sélectionnez l'élément canvas
        // canvasElement.style.marginLeft = `-${10}px`;
        
    }

}

const myGame = new MyGame();
