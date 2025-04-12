import { isEqual } from "./helperFunc";
import { TileType } from "./types";

export function isInQueue(tile: TileType, queue: TileType[]) {
  return queue.some((queuedTile) => isEqual(tile, queuedTile));
}