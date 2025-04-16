import { bfs } from "../algorithms/pathfinding/bfs";
import { AlgorithmType, GridType, TileType } from "./types";

export const runPathfindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: AlgorithmType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    // case "DFS":
    //   return;
    // case "DIJKSTRA":
    //   return;
    // case "A_STAR":
      // return;
    default:
      return bfs(grid, startTile, endTile);
  }
};