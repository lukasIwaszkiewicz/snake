import { GameObject } from "./game-object";
import { Position } from "./position";
import { CONST } from "./const";
import { Game } from "./game";

export class Snake extends GameObject {


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
    if (this.moveTimer <= 0) {
      this.moveTimer +=  1;
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
          if (this.position.y > CONST.TILES_HEIGHT -1) {
            this.position.y = 0;
          }
          break;
      }
    } else {
      this.moveTimer -= Game.deltaTime;
    }
  }


}
