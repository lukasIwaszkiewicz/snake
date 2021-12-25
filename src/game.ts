import { Snake } from "./snake";
import { GameObject } from "./game-object";
import { CONST } from "./const";

export class Game {

  ctx: CanvasRenderingContext2D;
  gameObjects: GameObject[];

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.gameObjects = [];
  }

  init() {
    console.log("init");

    const snake = new Snake({ position: { x: 2, y: 2 } });
    this.gameObjects.push(snake);
    this.tick();
  }

  tick() {
    requestAnimationFrame(() => {
      this.update();
      this.draw();
      this.tick();
    });
  }

  private draw() {
    this.ctx.clearRect(
      0,
      0,
      CONST.TILES_WIDTH * CONST.TILE_SIZE,
      CONST.TILES_HEIGHT * CONST.TILE_SIZE);

    this.gameObjects.forEach(x => x.draw(this.ctx));
  }

  private update() {
    this.gameObjects.forEach(x => x.update());
  }
}
