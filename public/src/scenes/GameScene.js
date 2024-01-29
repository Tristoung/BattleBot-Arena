import { Scene } from '../../phaser.esm.js';
import { Player } from '../sprites/PlayerSprite.js';

export class GameScene extends Scene {
    constructor() {
        super({ key: 'GameScene' });

        this.username = null;

        this.player = null;

        this.inputs = null;
        
    }

    init(data) {
        // Récupérer les données passées depuis MenuScene
        this.username = data.username;

        if (data.modifiedInputs) {
            this.inputs = data.modifiedInputs;
        }
    }

    preload() {
        this.load.image('player', 'assets/images/icon.png');

        console.log(`Username in GameScene: ${this.username}`);

    }

    create() {
        

        this.player = new Player(this, this.scale.width / 2, this.scale.height / 2, 'player', this.inputs);
        // this.player.updateKeys({
        //     up: 'E',
        //     down: 'D',
        //     left: 'S',
        //     right: 'F',
        // })

        
    }

    update() {
        this.player.update();
    }
}
