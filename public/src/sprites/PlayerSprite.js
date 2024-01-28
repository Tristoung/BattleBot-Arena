import { GameObjects } from '../../phaser.esm.js';

export class Player extends GameObjects.Sprite {
    constructor(scene, x, y, texture, inputConfig) {
        super(scene, x, y, texture);
        scene.add.existing(this);

        this.inputConfig = inputConfig;
        this.cursors = this.scene.input.keyboard.addKeys(this.inputConfig);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.x -= 5;
        } else if (this.cursors.right.isDown) {
            this.x += 5;
        }

        if (this.cursors.up.isDown) {
            this.y -= 5;
        } else if (this.cursors.down.isDown) {
            this.y += 5;
        }
    }

    updateKeys(config) {
        // this.cursors = this.scene.input.keyboard.addKeys(config);

        this.cursors.up = this.scene.input.keyboard.addKey(config.up || 'up');
        this.cursors.down = this.scene.input.keyboard.addKey(config.down || 'down');
        this.cursors.left = this.scene.input.keyboard.addKey(config.left || 'left');
        this.cursors.right = this.scene.input.keyboard.addKey(config.right || 'right');
    }
}
