import { GameObject } from "./game-object";
import { Position } from "./position";

export class Snake extends GameObject {

  constructor(config: { position?: Position }) {
    super(config);
  }


}
