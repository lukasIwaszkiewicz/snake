import { GameObject } from "./game-object";
import { Position } from "./position";
import { CONST } from "./const";
import { Game } from "./game";

export class Snake extends GameObject {


  tail: Position[] = [
    { x: this.position.x + 1, y: this.position.y },
    { x: this.position.x + 2, y: this.position.y },
    { x: this.position.x + 3, y: this.position.y },
];
  moveTimer = 1;
  direction: "up" | "right" | "left" | "down" = "up";
  name = "snake";

  constructor(config: { position?: Position }) {
    super(config);

    document.addEventListener("keydown", (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          this.direction = "up";
          break;
        case "ArrowRight":
          this.direction = "right";
          break;
        case "ArrowDown":
          this.direction = "down";
          break;
        case "ArrowLeft":
          this.direction = "left";
          break;
      }
    });
  }

  update(): void {
    if (this.shouldMove()) {
      this.resetMoveTimer();
      this.moveTail();
      this.moveHead();
    } else {
      this.moveTimer -= Game.deltaTime;
    }
  }

  private moveHead() {
    switch (this.direction) {
      case "up":
        this.position.y--;
        if (this.position.y < 0) {
          this.position.y = CONST.TILES_HEIGHT - 1;
        }
        break;
      case "right":
        this.position.x++;
        if (this.position.x > CONST.TILES_WIDTH - 1) {
          this.position.x = 0;
        }
        break;
      case "left":
        this.position.x--;
        if (this.position.x < 0) {
          this.position.x = CONST.TILES_WIDTH - 1;
        }
        break;
      case "down":
        this.position.y++;
        if (this.position.y > CONST.TILES_HEIGHT - 1) {
          this.position.y = 0;
        }
        break;
    }
  }

  private resetMoveTimer() {
    this.moveTimer += 1;
  }

  private shouldMove() {
    return this.moveTimer <= 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.sprite.color;
    ctx.fillRect(this.position.x * CONST.TILE_SIZE, this.position.y * CONST.TILE_SIZE, CONST.TILE_SIZE, CONST.TILE_SIZE);
    for (const tailElement of this.tail) {
      ctx.fillRect(tailElement.x * CONST.TILE_SIZE, tailElement.y * CONST.TILE_SIZE, CONST.TILE_SIZE, CONST.TILE_SIZE);
    }

  }

  private moveTail() {
    this.tail.splice(this.tail.length - 1, 1);
    this.tail.unshift({...this.position});
  }
}
