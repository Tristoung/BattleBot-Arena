export class InputManager {
    constructor(scene, config) {
        this.scene = scene;
        this.cursors = this.scene.input.keyboard.addKeys(config);
    }

    updateKeys(config) {
        this.cursors.up = this.scene.input.keyboard.addKey(config.up || 'up');
        this.cursors.down = this.scene.input.keyboard.addKey(config.down || 'down');
        this.cursors.left = this.scene.input.keyboard.addKey(config.left || 'left');
        this.cursors.right = this.scene.input.keyboard.addKey(config.right || 'right');
    }
}