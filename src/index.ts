import { CONST } from "./const";

require("../styles.css");

import { Game } from "./game";


const canvas = document.querySelector("#game-canvas") as HTMLCanvasElement;
if (canvas) {
  canvas.width = CONST.TILES_WIDTH * CONST.TILE_SIZE;
  canvas.height = CONST.TILES_HEIGHT * CONST.TILE_SIZE;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const game = new Game(ctx);
    game.init();
  }
}


