import Phaser from 'phaser';
import Game from './scenes/Game';
import Menu from './scenes/Menu';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 1000 }
    }
  },
  scene: [Game, Menu]
};

new Phaser.Game(config);
