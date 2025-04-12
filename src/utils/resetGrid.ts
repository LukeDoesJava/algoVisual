import { END_TILE_CONFIG, MAX_COL, MAX_ROW, START_TILE_CONFIG, TILE_STYLE } from "./constants";
import { GridType, TileType } from "./types";
import { isEqual } from "./helperFunc";
export const resetGrid = (
    {
        grid,
        startTile = START_TILE_CONFIG,
        finishTile = END_TILE_CONFIG,
    }:
    {
        grid: GridType,
        startTile?: TileType,
        finishTile?: TileType
    }
) => {
    for (let row = 0; row < MAX_ROW; row++) {
        for (let col = 0; col < MAX_COL; col++) {
            const tile = grid[row][col];
            tile.distance = Infinity;
            tile.isTraversed = false;
            tile.isPath = false;
            tile.parent = null;
            tile.isWall = false;

            if(!isEqual(startTile, tile) && isEqual(finishTile, tile)){
                const tileElement = document.getElementById(`tile-${tile.row}-${tile.col}`);
                if(tileElement){
                    tileElement.className = TILE_STYLE;
                }
                if(tile.row == MAX_ROW - 2 && tile.col == MAX_COL - 2){
                    tileElement?.classList.add("border-b")
                }
                if(tile.col === 0){
                    tileElement?.classList.add("border-l")
                }
            }
        }
    }
}