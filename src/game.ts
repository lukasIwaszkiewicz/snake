export class Game {

  gameCanvas: HTMLCanvasElement;

  constructor(gameCanvas: HTMLCanvasElement) {
    this.gameCanvas = gameCanvas;
  }

  init() {
    console.log("init");
  }
}
