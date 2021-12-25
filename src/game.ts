import { Snake } from "./snake";
import { GameObject } from "./game-object";
import { CONST } from "./const";

export class Game {

  static deltaTime = 0;
  ctx: CanvasRenderingContext2D;
  gameObjects: GameObject[];

  private lastUpdate: number = 0;
  private timePassed: number = 0;
  private frameRate: string = "";

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.gameObjects = [];
  }

  init() {
    const snake = new Snake({ position: { x: 2, y: 2 } });
    this.gameObjects.push(snake);
    this.tick();
  }

  tick() {
    const timeStamp = Date.now();
    Game.deltaTime = (timeStamp - this.lastUpdate) / 1000;

    requestAnimationFrame(() => {
      this.update();
      this.draw();
      this.tick();
    });

    this.lastUpdate = timeStamp;
  }

  private draw() {
    this.ctx.clearRect(
      0,
      0,
      CONST.TILES_WIDTH * CONST.TILE_SIZE,
      CONST.TILES_HEIGHT * CONST.TILE_SIZE);

    this.gameObjects.forEach(x => x.draw(this.ctx));
    this.fps();
  }

  private update() {
    this.gameObjects.forEach(x => x.update());
  }


  private fps() {
    if (this.timePassed > 1) {
      this.frameRate = (1 / Game.deltaTime).toFixed(0);
      this.timePassed = 0;
    } else {
      this.timePassed += Game.deltaTime;
    }
    this.ctx.fillText(this.frameRate, 10, 10);
  }
}
