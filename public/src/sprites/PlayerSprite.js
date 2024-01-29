import { GameObjects } from '../../phaser.esm.js';
import { InputManager } from '../utils/InputManager.js';

export class Player extends GameObjects.Sprite {
    constructor(scene, x, y, texture, inputConfig) {
        super(scene, x, y, texture);
        scene.add.existing(this);

        this.inputManager = new InputManager(scene, inputConfig);
    }

    update() {
        if (this.inputManager.cursors.left.isDown) {
            this.x -= 5;
        } else if (this.inputManager.cursors.right.isDown) {
            this.x += 5;
        }

        if (this.inputManager.cursors.up.isDown) {
            this.y -= 5;
        } else if (this.inputManager.cursors.down.isDown) {
            this.y += 5;
        }
    }

    updateKeys(config) {
        this.inputManager.updateKeys(config);
    }
}
