import { GameObject } from "./game-object";
import { CONST } from "./const";

export class Sprite {
  color: string;
  size: number;
  gameObject: GameObject;

  constructor(config: { color?: string, size?: number, gameObject: GameObject }) {
    this.color = config.color ?? "white";
    this.size = config.size ?? 32;
    this.gameObject = config.gameObject;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // console.log('drawing ' + this.color + ' ' + this.gameObject.name + ' of size ' + this.size )

    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.gameObject.position.x * CONST.TILE_SIZE,
      this.gameObject.position.y * CONST.TILE_SIZE,
      this.size,
      this.size);
  }
}
