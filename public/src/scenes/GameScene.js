import { Scene } from '../../phaser.esm.js';
import { Player } from '../sprites/PlayerSprite.js';

export class GameScene extends Scene {
    constructor() {
        super({ key: 'GameScene' });

        this.player = null;
        this.defaultInputs = {
            up: 'Z',
            down: 'S',
            left: 'Q',
            right: 'D',
        }
    }

    preload() {
        this.load.image('player', 'assets/images/icon.png');
    }

    create() {
        this.player = new Player(this, 100, 100, 'player', this.defaultInputs);
        // this.player.updateKeys({
        //     up: 'up',
        //     down: 'down',
        //     left: 'left',
        //     right: 'right',
        // })

        
    }

    update() {
        this.player.update();
    }
}
