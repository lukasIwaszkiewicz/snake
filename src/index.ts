require('../styles.css')

import { Game } from "./game";


const canvas = document.querySelector("#game-canvas") as HTMLCanvasElement;
if (canvas) {
  const game = new Game(canvas);
  game.init();
}
