import { Position } from "./position";
import { Sprite } from "./sprite";

export abstract class GameObject {
  position: Position;
  sprite: Sprite;

  abstract name: string;

  protected constructor(config: { position?: Position, sprite?: Sprite }) {
    this.position = config.position ?? new Position();
    this.sprite = config.sprite ?? new Sprite({ gameObject: this });
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.sprite.draw(ctx);
  };

  abstract update(): void;

}

