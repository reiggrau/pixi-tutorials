import { Sprite } from "pixi.js";

export interface SpriteExt extends Sprite {
  direction: number;
  speed: number;
  turnSpeed: number;
}
