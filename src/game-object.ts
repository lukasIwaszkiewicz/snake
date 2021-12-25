import { Position } from "./position";

export abstract class GameObject {
  position: Position;

  protected constructor(config: { position?: Position }) {
    this.position = config.position ?? new Position();
  }

  draw(ctx: CanvasRenderingContext2D) {

  };


}
