import { GameObject } from "./game-object";
import { CONSTS } from "./consts";

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
    ctx.fillStyle = this.color;
    ctx.fillRect(
      this.gameObject.position.x * CONSTS.TILE_SIZE,
      this.gameObject.position.y * CONSTS.TILE_SIZE,
      this.size,
      this.size);
  }
}
