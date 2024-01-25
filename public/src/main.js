import { Game, AUTO, Scale } from '../phaser.esm.js';
import { MenuScene } from './scenes/MenuScene.js';
import { GameScene } from './scenes/GameScene.js';

class MyGame {
    constructor() {
        this.width = 1280;
        this.height = 720;
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
                mode: Scale.ENVELOP
            },
        };

        this.game = new Game(config);

        this.game.scene.start('MenuScene');

        // Responsivité
        window.addEventListener('resize', ()=>{
            this.resize();

        });
        this.resize();
    }

    resize() {
        const canvas = this.game.canvas;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        if ((canvas.clientWidth - windowWidth) > 0) {
            canvas.style.marginLeft = `-${(canvas.clientWidth - windowWidth) / 2}px`; // Marge pour centrer le canvas WIDTH
        } else {
            canvas.style.marginLeft = '0px';
        }

        if ((canvas.clientHeight - windowHeight > 0)) {
            canvas.style.marginTop = `-${(canvas.clientHeight - windowHeight) / 2}px`; // Marge pour centrer le canvas HEIGHT
        } else {
            canvas.style.marginTop = '0px';
        }

        this.game.config.width = windowWidth;
        this.game.config.height = windowHeight;
    }
}

const myGame = new MyGame();
